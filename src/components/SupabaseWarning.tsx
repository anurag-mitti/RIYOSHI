
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const SupabaseWarning = () => {
  const missingUrl = !import.meta.env.VITE_SUPABASE_URL;
  const missingKey = !import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!missingUrl && !missingKey) return null;
  
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Supabase Configuration Error</AlertTitle>
      <AlertDescription>
        <p>Your Supabase configuration is incomplete. Missing:</p>
        <ul className="list-disc pl-5 mt-2">
          {missingUrl && <li>VITE_SUPABASE_URL</li>}
          {missingKey && <li>VITE_SUPABASE_ANON_KEY</li>}
        </ul>
        <p className="mt-2">
          <strong>Important:</strong> The app is currently running with a dummy Supabase client that won't actually connect to any database. 
          Authentication and data operations will not work.
        </p>
        <p className="mt-2">
          Please connect your project to Supabase through the green Supabase button in the top right of the Lovable interface.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default SupabaseWarning;
