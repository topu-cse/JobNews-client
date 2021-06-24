import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProfileIndex from './profile/Index'
import JobIndex from './jobs/Index'
import JobCreate from './jobs/Create'
import ApplicantIndex from './applicants/Index'
import ApplicantShow from './applicants/Show'
import ChangePassword from './changePassword/Index'

import ProfileComponent from '../../../components/companyProfile/Index'

const Master = () => {
    return (
        <div className="account-master">
            <main>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-padding">
                            <div className="d-lg-flex">
                                <div className="profile-info-container mb-3 mb-lg-0">
                                    <ProfileComponent />
                                </div>
                                <div className="data-container flex-fill pl-lg-3">
                                    <Switch>
                                        <Route exact path="/company/" component={ProfileIndex} />
                                        <Route exact path="/company/applicants" component={ApplicantIndex} />
                                        <Route exact path="/company/job/:id/applicants" component={ApplicantShow} />
                                        <Route exact path="/company/opened-jobs" component={JobIndex} />
                                        <Route exact path="/company/new-job" component={JobCreate} />
                                        <Route exact path="/company/change-password" component={ChangePassword} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Master;