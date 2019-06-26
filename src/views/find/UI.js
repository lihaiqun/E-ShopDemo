import React from 'react';
import '@/css/find/total.scss';
import TotalHeader from '@/components/find/Total/totalHeader';
import ContentWearGuide from '@/components/find/Total/contentWearGuide';
import ContentWearEveryday from '@/components/find/Total/contentWearEveryday';
import ContentWearLesson from '@/components/find/Total/contentWearLesson';
import ContentWearStar from '@/components/find/Total/contentWearStar';
import ContentWearChoose from '@/components/find/Total/contentWearChoose';
class Com extends React.Component {
  render () {
    return (
      <main className = "findMain">
        <TotalHeader />
        <div className = "content">
          <ContentWearGuide />
          <ContentWearEveryday />
          <ContentWearLesson />
          <ContentWearStar />
          {/* <ContentWearChoose /> */}
        </div>
        <strong className = "backTop">顶部</strong>
      </main>
    )
  }
}
export default Com;