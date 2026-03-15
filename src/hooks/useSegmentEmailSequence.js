import { useCallback } from 'react';
import { supabase } from '@/lib/customSupabaseClient';

/**
 * Hook to manage automated email sequences for different segments.
 */
const useSegmentEmailSequence = () => {
  
  const triggerEmail = useCallback(async (to, segment, emailType, data = {}) => {
    try {
      const { data: result, error } = await supabase.functions.invoke('send-segment-email', {
        body: { to, segment, emailType, data }
      });

      if (error) throw error;
      return { success: true, result };
    } catch (error) {
      console.error("Failed to trigger email sequence:", error);
      return { success: false, error };
    }
  }, []);

  // In a real backend, this logic would run via a cron job or scheduled task.
  // For this frontend-only demo, we expose the trigger function which is called 
  // immediately upon form submission for the "Welcome" email.
  // Subsequent emails (Day 2, 4, 7) would require a backend worker.
  
  return { triggerEmail };
};

export default useSegmentEmailSequence;