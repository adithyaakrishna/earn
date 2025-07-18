import { EllipsisVertical } from 'lucide-react';
import * as React from 'react';

import IoMdShareAlt from '@/components/icons/IoMdShareAlt';
import RiFlagFill from '@/components/icons/RiFlagFill';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { AuthWrapper } from '@/features/auth/components/AuthWrapper';

import { type Listing } from '../../types';
import { ReportListing } from './ReportListing';
import { ShareListing } from './ShareListing';

export function SecondaryOptions({
  listing,
}: {
  listing: Listing | undefined;
}) {
  const [shareOpen, setShareOpen] = React.useState(false);
  const [reportOpen, setReportOpen] = React.useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="h-8 w-auto rounded-md p-0 px-2 hover:bg-slate-100 focus-visible:outline-0 sm:h-10 sm:px-2">
          <EllipsisVertical className="text-slate-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[6rem] p-0" align="end">
          <DropdownMenuItem
            onSelect={() => setShareOpen(true)}
            className="group flex cursor-pointer justify-center font-medium text-slate-500"
          >
            <IoMdShareAlt className="group-hover:text-accent-foreground !size-5 text-slate-500" />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator className="m-0" />
          <AuthWrapper>
            <DropdownMenuItem
              onSelect={() => setReportOpen(true)}
              className="flex cursor-pointer justify-center font-medium text-slate-500 focus:text-red-500"
            >
              <RiFlagFill />
              Report
            </DropdownMenuItem>
          </AuthWrapper>
        </DropdownMenuContent>
      </DropdownMenu>
      <ShareListing
        source="listing"
        listing={listing}
        open={shareOpen}
        onOpenChange={setShareOpen}
      />

      {listing && (
        <ReportListing
          open={reportOpen}
          onOpenChange={setReportOpen}
          listing={listing}
        />
      )}
    </>
  );
}
