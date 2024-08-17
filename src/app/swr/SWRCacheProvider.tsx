import { SWRConfig } from 'swr';

export const SWRCacheProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      {children}
    </SWRConfig>
  )
}
