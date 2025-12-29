import React from 'react'
import Tabs from './Tabs'

function SettingSection() {
    const settingsTab = [
       { lable: 'General',
        content: (
            <div className='p-4'>
                <h3>General Settings</h3>
                <p>Manage your general settings and preferences.</p>
            </div>
        )
       },
       {lable: 'Privacy',
        content: (
            <div className='p-4'>
                <h3>Privacy Settings</h3>
                <p>Manage your privacy settings and preferences.</p>
            </div>
        )
       },
       {lable: 'Notifications',
        content: (
            <div className='p-4'>
                <h3>Notification Settings</h3>
                <p>Manage your notification settings and preferences.</p>
            </div>
        )
       },
       {lable: 'Security',
        content: (
            <div className='p-4'>
                <h3>Security Settings</h3>
                <p>Manage your security settings and preferences.</p>
            </div>
        )
       }
    ]

  return (
    <section className='settings-wrapper'>
        <h2>Account Settings</h2>
        <Tabs items={settingsTab} storageKey='settings_active_tab'/>
    </section>
  )
}

export default SettingSection