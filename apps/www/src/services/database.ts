"use server";

import { prisma } from "@strapex/database";

export type BusinessData = {
  name: string;
  description: string;
  tags: string;
  apiKey: string;
  ownerAddress: string;
  contractAddress: string;
};

export async function saveBusinessData(businessData: BusinessData) {
  try {
    // Find or create user based on wallet address
    const user = await prisma.user.upsert({
      where: { starknet_address: businessData.ownerAddress },
      update: { updated_at: new Date() },
      create: {
        starknet_address: businessData.ownerAddress,
      },
    });

    // Create business wallet linked to user
    const bizWallet = await prisma.bizWallet.create({
      data: {
        user_id: user.id,
        name: businessData.name,
        description: businessData.description,
        tags: businessData.tags,
        api_key: businessData.apiKey,
        contract_address: businessData.contractAddress,
      },
    });

    return bizWallet;
  } catch (error) {
    console.error("Error saving business data:", error);
    throw error;
  }
}
