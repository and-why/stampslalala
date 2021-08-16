// at its simplest, access control is either a yes or no depending on users' session
import { ListAccessArgs } from './types';
import { permissionsList } from './schemas/fields';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ]),
);

export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: ListAccessArgs) {
    return session?.data.name.includes('andy');
  },
};

export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    // 1. do they have the permission of CanManProd
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. if not do they own it
    return { user: { id: session.itemId } };
  },
  canOrder({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. do they have the permission of CanManProd
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2. if not do they own it
    return { user: { id: session.itemId } };
  },
  canManageOrderItems({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. do they have the permission of CanManProd
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2. if not do they own it
    return { order: { user: { id: session.itemId } } };
  },
  canReadProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return true;
    }
    if (permissions.canManageProducts({ session })) {
      return true; // they can read everything
    }
    // they should on
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // otherwise, they can only update themselves.
    return { id: session.itemId };
  },
};
