import React from 'react';
import {View, Linking, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import Header from '../components/Header';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

const EventDetails = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <BackButton />
        <Header title="Event Details" />
      </View>

      <WebView
        style={styles.content}
        originWhitelist={['*']}
        source={{
          html: '<div class="js-xd-read-more-contents l-mar-top-3" data-automation="listing-event-description" style="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p><span>"<em>A design system offers a library of visual style, components, and other concerns documented and released by an individual, team or community as code and design tools so that adopting products can be more efficient and cohesiv</em>e.\u201D -Nathan Curtis, Founder of EightShapes</span><br><br><span>As design\u2019s prominence in companies grows, the creation and adoption of design systems have become the norm. Companies old and new, from IBM to Google have all launched their own design systems in the past few years. But the creation of the design system is just the starting point.</span><br><br><span>How do these large companies keep a design system updated and evolving with the company while continuing to optimize for efficiency and consistency? How does the adoption and challenges of design systems change over time?</span><br><br><span>Join us in a panel discussion on evolving design systems with designers from Salesforce, Dropbox, Indeed, and Amazon.</span></p>\r\n<p>Before and after the panel, youll have the chance to check out some behind-the-scenes peeks of what weve been working on.</p>\r\n<p>All proceeds from the event will be donated back to SF Design Week.</p>\r\n<p><br></p>\r\n<p><span></span><br><br><span><strong>Panelists:</strong> </span><br><span>Kim Williams, Director of Experience Design, Indeed</span></p>\r\n<p>Shahrzad Samadzadeh, Principle Designer, Salesforce </p>\r\n<p>Jina Anne, Senior Design Systems Lead, Amazon Web Services, Special Projects</p>\r\n<p><span>Ed Chao, Product Designer, Dropbox</span><br><br><strong>Moderated by:</strong><br><span>Elijah Woolery, Director of Design Education, InVision</span></p>\r\n<p class="m_-3406347770188603044gmail-p1"><strong><span class="aBn"><span class="aQJ">Schedule</span></span></strong></p>\r\n<p class="m_-3406347770188603044gmail-p1"><br></p>\r\n<ul>\r\n<li><span class="aQJ">6:00 - 7:00pm</span> Check-in, Networking &amp; Dinner</li>\r\n<li><span class="aQJ">7:00 - 8:15pm</span> Panel + Q&amp;A</li>\r\n<li><span class="aQJ">8:15 - 9:00pm</span> Networking, chat with panelists</li>\r\n</ul>\r\n<p><br></p>\r\n<p><br></p>\r\n<p><br></p>\r\n<p><br></p>\r\n<p><span><img src="https://cdn.evbuc.com/eventlogos/199118665/58256625indeed1.jpg"></span></p>\r\n<p><br></p>\r\n<p><br></p>\r\n<p><br></p>\r\n<hr>\r\n<p><br></p>\r\n<p><em>Event Type: Panel<br></em></p>\r\n<p><em>Event Focus: Branding, Digital, Design Education, Experience Design, Product Design, Tech</em></p>\r\n<p><em>REFUND POLICY: We do not offer refunds. If the event is sold out, we might be able to give your spot to someone on the waitlist.</em></p>\r\n<p><em><span>By purchasing a ticket you are agreeing to the terms of the </span><a href="http://aigasf.org/aiga-san-francisco-weapons-free-policy/" target="_blank" rel="nofollow noopener noreferrer">AIGA SF <span class="il">Weapons</span>-Free Policy</a></em></p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div></span>',
        }}
      />
      <Button
        text="Details"
        onPress={() =>
          Linking.openURL('https://www.eventbrite.com/e/45263283700')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    margin: 10,
    marginBottom: 40,
    alignItems: 'center',
  },
});

export default EventDetails;
