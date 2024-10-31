# Factory contract address
0x03e171d9c4b93dde9a2b2c6658b56dc2b1bf43aad105e7685cb9974f01e13117

starkli declare ./target/dev/
~/.starkli-wallets/deployer/

starkli declare ./target/dev/contract_strapex_strapex_factory.contract_class.json --account ~/.starkli-wallets/deployer/my_account_1.json --rpc https://free-rpc.nethermind.io/sepolia-juno/  --keystore ~/.starkli-wallets/deployer/keystore_1.json

starkli declare ./target/dev/contract_strapex_strapex_contract.contract_class.json --account ~/.starkli-wallets/deployer/my_account_1.json --rpc https://free-rpc.nethermind.io/sepolia-juno/  --keystore ~/.starkli-wallets/deployer/keystore_1.json

starkli deploy 0x005ec981ff357fbbf07aea03f53155e3565cbb61483f325e8042b1bca2d0de81 0x2b760b5285b2a6222ee48c4c94a7fd2d2993244513e7fa6b2ccc2c2196471c 0x04a2111752dbd4bd8e661a746968a6352886efe3bacc4393dad52ad73b3ccfe6 0x49D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7 --account ~/.starkli-wallets/deployer/my_account_1.json --rpc https://free-rpc.nethermind.io/sepolia-juno/  --keystore ~/.starkli-wallets/deployer/keystore_1.json


# Mainet
starkli account fetch \
0x02407fd6fDed99cff76aD01666Ed4ab2059b1dA32944E5FB5f96dbF8075Bb6F5 \
--output ~/.starkli-wallets/deployer/my_account_starknetstore.json \
--rpc https://starknet-mainnet.public.blastapi.io/rpc/v0_6

## StarKnet store
~/.starkli-wallets/deployer/my_account_starknetstore.json
~/.starkli-wallets/deployer/my_keystore_starknetstore.jso
n


## Declare factory on mainet
starkli declare ./target/dev/contract_strapex_strapex_factory.contract_class.json --account ~/.starkli-wallets/deployer/my_account_666.json --rpc https://starknet-mainnet.public.blastapi.io/rpc/v0_6 --keystore ~/.starkli-wallets/deployer/my_keystore_666.json

## Deploy factory on mainet
starkli deploy 0x076d1e3fd7a1c0119a180a0a2d1f6f8d25d98a3989b701372101a53b8e570da6 0x02407fd6fDed99cff76aD01666Ed4ab2059b1dA32944E5FB5f96dbF8075Bb6F5 0x0109b597f26fefbc5cbccc41ae59317bc0bce855b1f1b549c129ce5aef95bebc 0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d --account ~/.starkli-wallets/deployer/my_account_starknetstore.json --rpc https://starknet-mainnet.public.blastapi.io/rpc/v0_6 --keystore ~/.starkli-wallets/deployer/my_keystore_starknetstore.json

## Declare contract on mainet
starkli declare ./target/dev/contract_strapex_strapex_contract.contract_class.json --account ~/.starkli-wallets/deployer/my_account_666.json --rpc https://starknet-mainnet.public.blastapi.io/rpc/v0_6 --keystore ~/.starkli-wallets/deployer/my_keystore_666.json

## Deploy contract on mainet


