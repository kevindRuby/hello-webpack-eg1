STEPS: https://gist.github.com/kevindRuby/ff0c08f6ebe1a474355ebbf0af1d7c60

**1. Tools to Test Performance of webpack after::**
To test the performance of your website and how quickly assets are loaded, you can use the following tools:
  Lighthouse: A built-in tool in Chrome DevTools that audits performance, accessibility, SEO, and more. You can run it by opening DevTools (F12), going to the "Lighthouse" tab, and clicking "Generate report."
  
  WebPageTest: A web-based tool that provides detailed performance analysis, including load times and resource usage. You can access it at webpagetest.org.
  
  GTmetrix: Another web-based tool that analyzes your site’s performance and provides recommendations for improvement. Visit gtmetrix.com.

**2. Development vs. Production Workflow**
In a production environment, you typically don’t run npm run build and npm start each time you make a change. Instead:

Development Mode: During development, you can use Webpack's development server, which automatically watches for file changes and refreshes the page. You just run npm start once, and it will rebuild the assets whenever you save changes.

Production Mode: For production, you would run npm run build to create an optimized, minified version of your assets. This build is then deployed to your web server.

**3 (OPTIONAL) Configuring for Development**
To simplify your workflow in development, make sure your webpack-dev-server is set up correctly in webpack.config.js:

javascript:
  devServer: {
      static: path.resolve(__dirname, 'dist'), // Serve files from the dist directory
      open: true, // Automatically open the browser
      hot: true, // Enable Hot Module Replacement
  },
  
With this setup, just running npm start will keep watching for changes, and your browser will refresh automatically whenever you save your files. This makes development much more efficient!
