// Script to load environment variables from Supabase
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get Supabase configuration
try {
  const supabaseOutput = execSync('pnpx supabase status').toString();
  
  // Parse DB URL
  const dbUrlMatch = supabaseOutput.match(/DB URL:\s+(postgresql:\/\/\S+)/);
  const dbUrl = dbUrlMatch ? dbUrlMatch[1] : null;
  
  if (dbUrl) {
    // Create .env file with the DB URL
    fs.writeFileSync(
      path.join(__dirname, '.env'), 
      `DATABASE_URL="${dbUrl}"\n`
    );
    console.log('✅ Database URL saved to .env file');
  } else {
    console.error('❌ Could not find database URL in Supabase output');
  }
} catch (error) {
  console.error('❌ Error setting up environment variables:', error.message);
  console.log('Make sure Supabase is running with: pnpx supabase start');
} 