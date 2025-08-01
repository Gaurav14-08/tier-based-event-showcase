import { useUser } from '@clerk/nextjs';

export function useUserTier() {
  const { user } = useUser();
  return user?.publicMetadata?.tier ?? 'free';
}