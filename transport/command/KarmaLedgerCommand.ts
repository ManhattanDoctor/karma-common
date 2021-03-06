export enum KarmaLedgerCommand {
    USER_GET = 'KARMA:UserGet',
    USER_ADD = 'KARMA:UserAdd',
    USER_LIST = 'KARMA:UserList',
    USER_EDIT = 'KARMA:UserEdit',
    USER_REMOVE = 'KARMA:UserRemove',
    USER_CRYPTO_KEY_EDIT= 'KARMA:UserCryptoKeyEdit',
    USER_PERMISSION_EDIT = 'KARMA:UserPermissionEdit',
    USER_DESCRIPTION_EDIT= 'KARMA:UserDescriptionEdit',

    COIN_EMIT = 'KARMA:CoinEmit',

    PERMISSION_GROUP_ADD = 'KARMA:PermissionGroupAdd',
    PERMISSION_GROUP_LIST = 'KARMA:PermissionGroupList',
    PERMISSION_GROUP_EDIT = 'KARMA:PermissionGroupEdit',
    PERMISSION_GROUP_REMOVE = 'KARMA:PermissionGroupRemove',
    
    TEST = 'KARMA:Test',
}
