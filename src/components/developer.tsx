
import { Button, Avatar,Spin } from 'antd';
import { FileOutlined, FireOutlined, HeartOutlined } from '@ant-design/icons';
import '../styles/developer-card.scss'
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Developer } from '../shared/models'

function Developers() {
  //state
  const [developers, setDevelopers] = useState<Developer[]>([])
  const [loading,setloading]=useState<boolean>(true)

  // methods

  const getDevelopers = () => {
    axios.get('https://gh-trending-api.herokuapp.com/developers').then(res => {
      setDevelopers(res.data)
      setloading(false)

    })
  }

  // life cycle
  useEffect(() => {
    getDevelopers()
  }, [])

  return (
    <Fragment>
        {
      loading&&
      <div className='loading'><Spin tip="Loading..."></Spin></div>
      }
      {
        developers.map((developer,index) => {
          return (
            <div className=' developer-card'>
              <div className='developer-data'>
                <p className='id'>{developer.rank}</p>
                <Avatar src={developer.avatar} />
                <div className='developer-meta'>
                  <p className='developer-name'> {developer.name}</p>
                  <p className='developer-desc'>{developer.username}</p>
                </div>
              </div>
              <div className='developer-repo-container'>
                <p className='repo-type'> <FireOutlined /> Popular Repo</p>
                <p className='repo-name'><FileOutlined /> {developer.popularRepository.repositoryName}</p>
                <p className='repo-desc'>✨{developer.popularRepository.description}</p>
              </div>

              <div className='developer-actions'>
                <Button icon={<HeartOutlined />}>Sponsor</Button>
                <Button >Follow</Button>
              </div>
            </div>
          )
        })
      }
    </Fragment>


  );
}

export default Developers;
