const ActiveDirectory = require('activedirectory2');
require('dotenv').config();

const config = {
    url: process.env.AD_URL,                  // IP Domain Controller
    baseDN: process.env.AD_BASE_DN,           // BaseDN ของ Domain
    username: process.env.AD_USERNAME,         // account ที่ใช้ bind AD
    password: process.env.AD_PASSWORD,
    attributes: {
        user: [
            'dn', 'cn', 'sn', 'givenName', 'displayName', 'mail',
            'sAMAccountName', 'userPrincipalName',
            'department',
            'title',
            'company',
            'manager'
        ]
    }
};

const ad = new ActiveDirectory(config);

module.exports = ad;
