import Listing from "@/components/Listing";
import Section from "@/components/Section";

export default function Experience() {
  return (
    <Section>
        <Section.Title>Experience</Section.Title>
        <Listing>
          <div>
            <h3 className='text-xl font-bold'>NationBuilder</h3>
            <p className='mt-1 text-gray-600'>
              UI Engineer <span className='text-gray-300'>•</span> Nov 2018 -
              Present
            </p>
            <ul className='mt-2 list-disc pl-3'>
              <li>
                Maintain and implement new features within our design system
                Radius.
              </li>
              <li>
                Implement new components and features using React, Redux, and
                React Router.
              </li>
              <li>
                Implement marketing landing pages for different product
                verticals.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold'>Mighty in the Midwest</h3>
            <p className='mt-1 text-gray-600'>
              Senior Developer <span className='text-gray-300'>•</span> Oct 2015
              - Nov 2018
            </p>
            <ul className='mt-2 list-disc pl-3'>
              <li>
                Architected solutions and estimate project scope for new and
                existing client features.
              </li>
              <li>
                Introduced modern Javascript practices with Webpack and Rollup.
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold'>Masuga Design</h3>
            <p className='mt-1 text-gray-600'>
              Front-end Developer <span className='text-gray-300'>•</span> Feb
              2012 - Oct 2015
            </p>
            <ul className='mt-2 list-disc pl-3'>
              <li>Designed and developed a SaaS app built on Laravel.</li>
              <li>
                Developed mobile-first front-end templates for clients such as
                FOX Networks Info and A+E Networks Affiliates.
              </li>
            </ul>
          </div>
        </Listing>
      </Section>
  )
}
