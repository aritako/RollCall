import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Redirect, Route } from 'react-router';
import Dashboard from './Dashboard';
import Settings from './Settings';
import { homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';
import './Home.css';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Home: React.FC = () => {
  const paths = [
    { name: 'Home', url: '/app/dashboard/view', icon: homeOutline },
    { name: 'Settings', url: '/app/settings', icon: newspaperOutline },
  ]
  console.log('Home');
  return (
    <IonPage>
      <IonSplitPane contentId = 'main' when = "xl">
      <IonMenu contentId = 'main'>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>RollCall</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key = { index } autoHide = { false }>
                <IonItem routerLink = {item.url} key = { index } routerDirection = "none">
                <IonIcon slot = "start" icon = {item.icon} />
                {item.name}
                </IonItem>
              </IonMenuToggle>
              ))}
              <IonMenuToggle autoHide = { false }>
                  <IonItem detail = {false} routerLink = "/" routerDirection = "root">
                  <IonIcon slot = "start" icon = {logOutOutline} />
                  Logout
                  </IonItem>
              </IonMenuToggle>
          </IonContent>
      </IonMenu>
      <IonRouterOutlet id = 'main'>
          <Route path = "/app/dashboard" component = {Dashboard} />
          <Route path = "/app/settings" component = {Settings} />
          {/* <Route path = "/app/dashboard/scan" component = {Dashboard} />
          <Route path = "/app/dashboard/profile" component = {Dashboard} />
          <Route path = "/app/settings/tab1" component = {Settings} />
          <Route path = "/app/settings/tab2" component = {Settings} /> */}
          <Route exact path = "/app">
              <Redirect to = "/app/dashboard/view"/>
          </Route>
      </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Home;
