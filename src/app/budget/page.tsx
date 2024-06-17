'use client'

import React, { useState } from 'react';

const BudgetPage: React.FC = () => {
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
    setIsProfileDropdownOpen(false); // Ensure the profile dropdown is closed
  };
  
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsEventsDropdownOpen(false); // Ensure the events dropdown is closed
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-customColor_black sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open Main Menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="/images/logo_label.png" alt="EventWise" />
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/" className="bg-customColor_yellow text-customColor_black rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                  
                  <div className="relative">
                    <button
                      type="button"
                      className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={toggleEventsDropdown}
                    >
                      Events
                    </button>

                    {isEventsDropdownOpen && (
                      <div
                        className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex={-1}
                      >
                        <a href="/event1" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                          Calendar
                        </a>
                        <a href="/event2" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                          Events
                        </a>
                        <a href="/event3" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                          Joined
                        </a>
                      </div>
                    )}
                  </div>

                  <a href="/about" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                  <a href="/services" className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:pr-0">
              <button type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-2 sm:static sm:pr-0">
              <button type="button" className="relative rounded-full bg-customColor_yellow p-1 text-black-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View budget</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
              </button>
            </div>

            {/* Profile dropdown*/}
            <div className="relative ml-2" onClick={toggleProfileDropdown}>
                <div>
                    <button type="button" className="relative flex rounded-full bg-customColor_yellow text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded={isProfileDropdownOpen} aria-haspopup="true">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open User Menu</span>
                        <img className="h-8 w-8 rounded-full" src="/images/icon_wb.png" alt=""></img>
                    </button>
                </div>

                {isProfileDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                      Portfolio
                    </a>
                    <a href="#" className="block px-4 py-2 text-base text-gray-700" role="menuitem" tabIndex={-1}>
                      Log Out
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Mobile Menu, show/hide based on menu open state */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Events
            </a>
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
              About
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Services
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section bg-customColor_black relative">
        <img className="h-auto w-full object-cover" src="/images/home_event.png" alt="hero image" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Welcome to EventWise</h1>
            <p className="mt-4 text-lg text-gray-300 md:text-2xl">The perfect platform for planning and managing your events seamlessly.</p>
            <a
              href="/events"
              className="mt-8 inline-block rounded-full bg-customColor_yellow px-6 py-3 text-base font-medium text-customColor_black hover:bg-white hover:text-black md:text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="container mx-auto py-8 px-4">
        {/* Event Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">Upcoming Events</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Event Card */}
            <div className="event-card rounded-lg bg-customColor_white shadow-lg">
              <img className="h-48 w-full rounded-t-lg object-cover" src="/images/event1.jpg" alt="event 1" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Event Name 1</h3>
                <p className="text-gray-600">Event Date: 2024-07-01</p>
                <p className="text-gray-600">Location: City, Country</p>
              </div>
            </div>

            {/* Additional Event Cards */}
            {/* Add more event cards as needed */}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">About Us</h2>
          <p className="text-gray-300">EventWise is a comprehensive platform designed to help you plan, manage, and execute your events with ease. From small gatherings to large conferences, we provide the tools and resources you need to make your event a success.</p>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">Our Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Service Card */}
            <div className="service-card rounded-lg bg-customColor_white shadow-lg">
              <img className="h-48 w-full rounded-t-lg object-cover" src="/images/service1.jpg" alt="service 1" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Service Name 1</h3>
                <p className="text-gray-600">Description of Service 1.</p>
              </div>
            </div>

            {/* Additional Service Cards */}
            {/* Add more service cards as needed */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-customColor_black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-xl font-semibold text-white">EventWise</a>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400">
            &copy; 2024 EventWise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BudgetPage;
