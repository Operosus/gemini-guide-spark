-- Enable Row Level Security on Gemini Guides Leads table
ALTER TABLE public."Gemini Guides Leads" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert email leads (public signup)
CREATE POLICY "Anyone can insert email leads" 
ON public."Gemini Guides Leads" 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create policy to prevent viewing leads (admin only access)
CREATE POLICY "No public access to view leads" 
ON public."Gemini Guides Leads" 
FOR SELECT 
TO public
USING (false);