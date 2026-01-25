import type { ClassNameValue } from 'tailwind-merge';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

type Version = {
  version: string;
  badge?: {
    label: string;
    className: ClassNameValue;
  };
  url: string;
};

const versions: Version[] = [
  {
    version: '1.2.0',
    badge: {
      label: 'Latest',
      className: 'text-green-500 border-green-500',
    },
    url: 'https://github.com/PrismaUI-SKSE/framework/releases/download/1.2.0/PrismaUI_1.2.0.zip',
  },
  {
    version: '1.1.0',
    url: 'https://github.com/PrismaUI-SKSE/framework/releases/download/1.1.0/PrismaUI_1_1_0.zip',
  },
  {
    version: '1.0.0',
    url: 'https://github.com/PrismaUI-SKSE/framework/releases/download/1.0.0/PrismaUI_1_0_0.zip',
  },
];

export const VersionSelector = () => (
  <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="cursor-pointer">Download Prisma UI</a>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Select the version</DropdownMenuLabel>
      <DropdownMenuSeparator />
      {versions.map((version) => (
        <DropdownMenuItem key={version.version} className="cursor-pointer">
          <a
            href={version.url}
            target="_blank"
            className="flex items-center justify-between w-full gap-3"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-medium">{version.version}</span>
            </div>
            {version.badge && (
              <span
                className={cn(
                  `px-2 py-0.5 text-xs font-medium rounded-lg border`,
                  version.badge.className
                )}
              >
                {version.badge.label}
              </span>
            )}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
