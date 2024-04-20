'use client';
import { RegularFooter, DesktopTopNavbar } from '@spwntch/shell';
import { PropsWithChildren } from 'react';

/**
 * Props for the SiteShell component.
 */
export interface SiteShellProps {
  underContruction?: boolean;
  /**
   * Configuration options for the navbar.
   */
  navbar?: {
    /**
     * Additional CSS classes for the navbar.
     */
    classNames?: string;
    /**
     * Alignment of the navbar.
     */
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
  };
  githubUrl?: string;
  /**
   * Determines whether to display shell information.
   */
  displayShellInfo?: boolean;
}

export const WebsiteShell = ({
  // underContruction,
  navbar,
  githubUrl,
  // displayShellInfo,
  children,
}: SiteShellProps & PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col container">
      <DesktopTopNavbar
        classNames={navbar?.classNames}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        githubUrl={githubUrl}

      />
      <main className="h-full flex flex-col overflow-y">
        <div className="flex-1">{children}</div>
        {/* {underContruction ? <UnderConstructionFooter /> :  */}
        <RegularFooter />
        {/* } */}
      </main>
      {/* {displayShellInfo && <ShellInfo />} */}
    </div>
  );
};