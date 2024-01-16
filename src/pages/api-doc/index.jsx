import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';






function ApiDoc() {
    return (
        <Layout title="LambdaTest API Documentation"
            description="Manage and organize your test builds, test sessions, tunnel status and more with LambdaTest APIs for Selenium automation, App automation, Smart UI automation and Automated screenshots. ">
            <div className="lambda-api">
                <Tabs groupId="key" queryString>
                    <TabItem value="selenium-automation-api" label="Selenium Automation API">
                        <iframe className="embed-responsive-item"
                            src="https://stage-swagger-api-support.lambdatestinternal.com/index.html"></iframe>
                    </TabItem>
                    <TabItem value="automated-screenshot-api" label="Automated Screenshots API">
                        <iframe className="embed-responsive-item"
                            src="https://screenshot-public-api.lambdatestinternal.com/"></iframe>
                    </TabItem>
                    <TabItem value="app-automation-api" label="App Automation API (Real Devices)">
                        <iframe className="embed-responsive-item"
                            src="https://stage-app-automation-apis-docs.lambdatestinternal.com/"></iframe>
                    </TabItem>
                    <TabItem value="smart-ui-automation" label="Smart UI Automation">
                        <iframe className="embed-responsive-item"
                            src="https://stage-swagger-api-support.lambdatestinternal.com/smartui/index.html"></iframe>
                    </TabItem>
                    <TabItem value="cypress-automation" label="Cypress Automation">
                        <iframe className="embed-responsive-item"
                            src="https://stage-swagger-api-support.lambdatestinternal.com/cypress/index.html"></iframe>
                    </TabItem>
                    <TabItem value="user-management" label="User Management">
                        <iframe className="embed-responsive-item"
                            src="https://stage-swagger-api-support.lambdatestinternal.com/user_management/index.html"></iframe>
                    </TabItem>
                    <TabItem value="scim" label="SCIM">
                        <iframe className="embed-responsive-item"
                            src="https://stage-swagger-api-support.lambdatestinternal.com/scim/index.html"></iframe>
                    </TabItem>
                    <TabItem value="auditlogs" label="Audit Logs">
                        <iframe className="embed-responsive-item"
                            src="https://stage-swagger-api-support.lambdatestinternal.com/audit-logs/index.html"></iframe>
                    </TabItem>

                    
                </Tabs>
            </div>
        </Layout>
    );
}

export default ApiDoc;
