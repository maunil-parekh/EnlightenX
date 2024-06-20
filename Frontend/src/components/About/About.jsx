import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h1 className="text-3xl text-gray-900 font-bold">
                   EnlightenX - Where Self-Development, AI Insights, and Financial Planning Intersect
                      </h1>
                      <p className="mt-6 text-gray-600">
                      Welcome to EnlightenX, your all-encompassing platform dedicated to illuminating the path to personal growth, leveraging the latest in AI technology, and navigating the complexities of financial planning. At EnlightenX, we believe in the power of continuous learning and holistic development.

Unlock the potential within yourself through our curated self-development resources, ranging from mindfulness practices to productivity hacks. Stay ahead of the curve with our cutting-edge AI updates, providing you with insights into the rapidly evolving technological landscape and how it impacts your life.

Moreover, take control of your financial future with our comprehensive financial planning tools and expert advice. Whether you're aiming for financial freedom, wealth accumulation, or retirement planning, EnlightenX equips you with the knowledge and strategies to achieve your goals.

Join our community of like-minded individuals committed to personal and professional growth. Let EnlightenX be your guide as you embark on a journey towards self-discovery, empowerment, and financial success. Start your transformative journey today with EnlightenX.






                      </p>
                      {/* <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p> */}
                  </div>
              </div>
          </div>
      </div>
  );
}
