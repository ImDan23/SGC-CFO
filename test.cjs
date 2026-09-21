const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://knidfmkrmyepqfhktzme.supabase.co';
const supabasePublishableKey = 'sb_publishable_31Up_a4Fe-FuvR0ify550A_fSK_9tnw';

const supabase = createClient(supabaseUrl, supabasePublishableKey);

async function main() {
  const { data, error } = await supabase
    .from('papelitos')
    .select('*');
    
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  
  console.log('Total records:', data.length);
  const unpaid = data.filter(d => d.payment_status === 'Unpaid');
  console.log('Total Unpaid:', unpaid.length);
  const unreturned = data.filter(d => d.status === 'Unreturned');
  console.log('Total Unreturned:', unreturned.length);
  
  if (unpaid.length > 0) {
      console.log('First Unpaid record:', unpaid[0]);
  }
}

main();
