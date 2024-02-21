import React from 'react'
import Navbar from '../Components/Fixed/Navbar'
import CollapsibleItem from '../Components/Fixed/CollapsibleItem'
import ProfileComponent from '../Components/HomePageComponents/ProfileComponent'
import ExperienceDetailsComponent from '../Components/HomePageComponents/ExperienceDetailsComponent'
import EducationDetailsComponent from '../Components/HomePageComponents/EducationDetailsComponent'

function HomePage() {
  return (
   <>
   <Navbar />
    <CollapsibleItem title={"Personal Details"} children={<ProfileComponent />} />
    <CollapsibleItem title={"Experience Details"} children={<ExperienceDetailsComponent />} />
    <CollapsibleItem title={"Education Details"} children={<EducationDetailsComponent />} />
   </>
  )
}

export default HomePage