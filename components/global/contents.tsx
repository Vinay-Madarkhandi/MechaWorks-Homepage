import React from "react";
import Image from "next/image";

export const Contents = () => {
  return (
    <div className="project-info">
      <div className="left-wala-main">
        <div className="tag">
          <div>For Users</div>
        </div>
        <div className="title">Unlock Earnings</div>
        <div className="data">
          <div className="data_item">
            <div>
              <span>$</span>100 +
            </div>
            <div>Rewards</div>
          </div>
          <div className="data_item">
            <div>10K +</div>
            <div>User Community</div>
          </div>
          <div className="data_item">
            <div>50K +</div>
            <div>Campaigns</div>
          </div>
        </div>
        <div className="content">
          <div className="content_item">
            <div>Learn</div>
            <div>
              <Image
                src="/bx1-1.png"
                width={100}
                height={100}
                alt="Learn Img"
              />
            </div>
          </div>
          <div className="content_item">
            <div>Engage</div>
            <div>
              <Image
                src="/bx1-2.png"
                width={100}
                height={100}
                alt="Engage Img"
              />
            </div>
          </div>
          <div className="content_item">
            <div>Earn</div>
            <div>
              <Image src="/bx1-3.png" width={100} height={100} alt="Earn Img" />
            </div>
          </div>
        </div>
        <div className="btn">
          <a href="http://localhost:3002/" target="_blank">
            Start Earning Now
          </a>
        </div>
      </div>
      <div className="right-wala-main">
        <div className="tag">
          <div>For Clients</div>
        </div>
        <div className="title">Dive Growth & Suceed</div>
        <div className="data">
          <div className="data_item">
            <div>10k +</div>
            <div>Active Users</div>
          </div>
          <div className="data_item">
            <div>70K +</div>
            <div>Completed Task</div>
          </div>
          <div className="data_item">
            <div>100 %</div>
            <div>Worth Your Money</div>
          </div>
        </div>
        <div className="content">
          <Image src="/bx2-main.jpg" height={200} width={500} alt="Earn Img" />
        </div>
        <div className="btn">
          <a href="http://localhost:3001/" target="_blank">
            Create your Campaign
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contents;
