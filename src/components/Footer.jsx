import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-12 px-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-semibold text-white mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li><a href="/about" className='hover:text-blue-400'>About Us</a></li>
              <li><a href="/careers" className='hover:text-blue-400'>Careers</a></li>
              <li><a href="/press" className='hover:text-blue-400'>Press</a></li>
              <li><a href="/blog" className='hover:text-blue-400'>Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-white mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li><a href="/help-center" className='hover:text-blue-400'>Help Center</a></li>
              <li><a href="/documentation" className='hover:text-blue-400'>Documentation</a></li>
              <li><a href="/api" className='hover:text-blue-400'>API Reference</a></li>
              <li><a href="/tutorials" className='hover:text-blue-400'>Tutorials</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-white mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li><a href="/privacy-policy" className='hover:text-blue-400'>Privacy</a></li>
              <li><a href="/terms" className='hover:text-blue-400'>Terms of Service</a></li>
              <li><a href="/security" className='hover:text-blue-400'>Security</a></li>
              <li><a href="/compliance" className='hover:text-blue-400'>Compliance</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-white mb-4'>Stay Updated</h3>
            <p className='mb-4 text-gray-400'>Subscribe to our newsletter to get the latest updates, product launches, and offers.</p>
            <form className='flex flex-col sm:flex-row gap-4'>
              <input type="email" placeholder='Enter your email' className='px-4 py-2
              rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-blue-400'/>
              <button type='submit' className='px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center'>
        <p className='text-gray-400 text-sm'>
          ©{new Date().getFullYear()} Saas Company. All Rights Reserved.
        </p>
        <ul className='flex space-x-6 mt-4 sm:mt-0'>
          <li><a href="#" className='hover:text-blue-400'>Facebook</a></li>
          <li><a href="#" className='hover:text-blue-400'>Twitter</a></li>
          <li><a href="#" className='hover:text-blue-400'>LinkedIn</a></li>
          <li><a href="#" className='hover:text-blue-400'>Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer