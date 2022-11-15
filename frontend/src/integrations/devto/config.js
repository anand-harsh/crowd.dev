import DevtoConnect from './components/devto-connect'
import DevtoActivityMessage from './components/activity/devto-activity-message'
import DevtoActivityContent from './components/activity/devto-activity-content'

export default {
  enabled: true,
  name: 'DEV',
  backgroundColor: '#E5E7EB',
  borderColor: '#E5E7EB',
  description:
    'Connect DEV to sync profile information and comments on articles.',
  image:
    'https://cdn-icons-png.flaticon.com/512/5969/5969051.png',
  connectComponent: DevtoConnect,
  activityMessage: DevtoActivityMessage,
  activityContent: DevtoActivityContent
}