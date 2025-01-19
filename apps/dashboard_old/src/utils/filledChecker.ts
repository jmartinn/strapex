import { ContactInformation } from "../components/contact-info-form";
import { ShippingAddress as ShippingAddressType } from "../components/shipping-address-form";

export function isContactInformationFilled(
  contactInformation: ContactInformation,
): boolean {
  return (
    !!contactInformation.name &&
    !!contactInformation.surname &&
    !!contactInformation.phoneNumber &&
    !!contactInformation.email
  );
}

export function isShippingAddressFilled(
  shippingAddress: ShippingAddressType,
): boolean {
  return (
    !!shippingAddress.name &&
    !!shippingAddress.surname &&
    !!shippingAddress.address &&
    !!shippingAddress.city &&
    !!shippingAddress.state &&
    !!shippingAddress.country &&
    !!shippingAddress.postcode
  );
}
