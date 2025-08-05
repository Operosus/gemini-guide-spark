import { PageLayout } from "@/components/PageLayout";

const GenerateImageGuide = () => {
  return (
    <PageLayout showBackButton={true}>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center text-4xl">
            🎨
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Generate an Image
          </h1>
          <p className="text-xl text-text-secondary">
            Create professional images with Imagen 4. Includes prompt templates, style keywords, and tips for making changes and improvements.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Is Image Generation in Gemini?</h2>
            <p className="text-text-secondary mb-4">
              Gemini can create high-quality images from text descriptions using Imagen 4, Google's latest image AI. You simply describe what you want to see, and it generates the image in seconds.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Core Concept</h3>
              <p className="text-text-secondary">
                Think of it as having a personal artist who can instantly create visuals from your ideas. Perfect for presentations, social media, brainstorming, or when you need custom images quickly.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Generate Your First Image</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Access Image Generation</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Go to gemini.google.com</li>
                  <li>Type your image description in the chat</li>
                  <li>Add "create an image of" or "generate a picture of" to your prompt</li>
                  <li>Hit Enter</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Wait for Generation</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Images typically generate in 5-15 seconds</li>
                  <li>You'll see 1-4 image options</li>
                  <li>Preview them before downloading</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Download or Regenerate</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Hover over an image you like</li>
                  <li>Click the download icon to save</li>
                  <li>Click "Regenerate" if you want different options</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Basic Image Prompt Structure</h2>
            
            <div className="bg-muted/10 border border-muted/20 rounded-lg p-6 mb-6">
              <div className="text-primary font-semibold mb-4">Formula: [Subject] + [Setting] + [Style] + [Specific Details]</div>
              
              <div className="space-y-2 text-text-secondary">
                <div><strong>Subject:</strong> "A modern office building"</div>
                <div><strong>Setting:</strong> "at sunset in a city centre"</div>
                <div><strong>Style:</strong> "in minimalist architectural photography style"</div>
                <div><strong>Details:</strong> "with glass windows reflecting orange sky"</div>
              </div>
              
              <div className="mt-4 p-4 bg-black/20 rounded">
                <strong>Full Prompt:</strong> "Create an image of a modern office building at sunset in a city centre, in minimalist architectural photography style, with glass windows reflecting orange sky"
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Five Ready-to-Use Prompt Templates</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Professional Headshot</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary mb-4">
{`Create a professional headshot photo of a [age] [gender] [ethnicity] business professional, wearing a [clothing description], sitting in a modern office, natural lighting, sharp focus, confident expression, corporate style`}
                </div>
                <div className="text-sm text-text-secondary">
                  <strong>Example:</strong> "Create a professional headshot photo of a 35-year-old woman business professional, wearing a navy blue blazer, sitting in a modern office, natural lighting, sharp focus, confident expression, corporate style"
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Product Mockup</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary mb-4">
{`Create a product photography image of a [product] on a [background], [lighting description], minimal and clean composition, professional commercial style, [specific details]`}
                </div>
                <div className="text-sm text-text-secondary">
                  <strong>Example:</strong> "Create a product photography image of a sleek smartphone on a white marble surface, soft studio lighting, minimal and clean composition, professional commercial style, with subtle shadows"
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Presentation Slide Background</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary mb-4">
{`Create a [colour scheme] abstract background suitable for presentation slides, [style description], subtle [elements], professional and clean, 16:9 aspect ratio`}
                </div>
                <div className="text-sm text-text-secondary">
                  <strong>Example:</strong> "Create a blue and white abstract background suitable for presentation slides, modern geometric style, subtle grid patterns, professional and clean, 16:9 aspect ratio"
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">4. Social Media Post</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary mb-4">
{`Create a [platform] social media post image with [theme/topic], [colour scheme], [visual elements], engaging and eye-catching, square format`}
                </div>
                <div className="text-sm text-text-secondary">
                  <strong>Example:</strong> "Create a LinkedIn social media post image with productivity theme, blue and orange colour scheme, showing organised workspace elements, engaging and eye-catching, square format"
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">5. Concept Illustration</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary mb-4">
{`Create an illustration showing [concept/idea], [style] art style, [colour palette], simple and clear visual metaphor, suitable for [purpose]`}
                </div>
                <div className="text-sm text-text-secondary">
                  <strong>Example:</strong> "Create an illustration showing teamwork concept, flat design art style, warm colour palette, simple and clear visual metaphor, suitable for training materials"
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Making Changes and Suggestions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Requesting Modifications</h3>
                <p className="text-text-secondary mb-4">After generating an image, you can ask for specific changes:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"Make the background darker"</li>
                  <li>"Change the colour scheme to blue and green"</li>
                  <li>"Add more people to the scene"</li>
                  <li>"Make it more professional looking"</li>
                  <li>"Remove the text and simplify"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Best Approach for Changes:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li><strong>Be Specific:</strong> Rather than "make it better," say "make the lighting brighter"</li>
                  <li><strong>One Change at a Time:</strong> Request single modifications to see clear results</li>
                  <li><strong>Reference the Original:</strong> "Using the same style, but change the setting to..."</li>
                  <li><strong>Iterate Gradually:</strong> Make small adjustments rather than complete overhauls</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Getting Variations:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Click "Create similar" for variations of the same concept</li>
                  <li>Ask for "3 different colour schemes for this same image"</li>
                  <li>Request "same concept but different angles/perspectives"</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Image Generation Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Do:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li><strong>Be Specific:</strong> "Red sports car" vs "Bright red Ferrari convertible"</li>
                  <li><strong>Include Style:</strong> Add terms like "photorealistic," "minimalist," "watercolour"</li>
                  <li><strong>Mention Lighting:</strong> "Natural light," "studio lighting," "golden hour"</li>
                  <li><strong>Specify Composition:</strong> "Close-up," "wide shot," "bird's-eye view"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Don't:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>Use vague descriptions: "Nice picture of something cool"</li>
                  <li>Request copyrighted characters or real people by name</li>
                  <li>Expect perfect text in images (though Imagen 4 is much better)</li>
                  <li>Generate inappropriate or harmful content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Style Keywords That Work Well</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Photography</h4>
                  <p className="text-text-secondary text-sm">Photorealistic, studio lighting, portrait style, documentary style</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Artistic</h4>
                  <p className="text-text-secondary text-sm">Watercolour, oil painting, digital art, illustration, sketch</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Design</h4>
                  <p className="text-text-secondary text-sm">Minimalist, modern, corporate, clean, professional</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Mood</h4>
                  <p className="text-text-secondary text-sm">Bright and airy, moody, dramatic, serene, energetic</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Advanced Tips</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Aspect Ratios</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Add "16:9 aspect ratio" for presentation slides</li>
                  <li>Add "1:1 square format" for social media</li>
                  <li>Add "9:16 portrait orientation" for mobile screens</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Multiple Variations</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>After generating, click "Create similar" for variations</li>
                  <li>Try the same prompt with different style keywords</li>
                  <li>Use "create 4 variations of..." in your prompt</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Combining with Other Tools</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Generate base images, then edit in Canva or Photoshop</li>
                  <li>Use generated images as inspiration for human designers</li>
                  <li>Create multiple elements to combine into larger compositions</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-text-primary font-semibold">
              Remember: Image generation works best when you're specific about what you want. Don't be afraid to experiment and iterate on your prompts to get the perfect result.
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default GenerateImageGuide;