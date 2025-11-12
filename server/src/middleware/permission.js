const prisma = require('../config/db');

function requirePermission(permissionName) {
  return async (req, res, next) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const user = await prisma.webmes_User.findUnique({
      where: { id: userId },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const hasPermission = user.roles.some((r) =>
      r.role.name === 'SUPER_ADMIN' || // ✅ shortcut
      r.role.permissions.some((rp) => {
        const fullPerm = `${rp.permission.module}.${rp.permission.name}`;
        return (
          fullPerm === permissionName || fullPerm === '*.*'
        );
      })
    );

    if (!hasPermission) {
      console.warn(`⛔ User ${userId} missing permission: ${permissionName}`);
      return res.status(403).json({ message: 'Permission denied' });
    }

    next();
  };
}


module.exports = requirePermission;
