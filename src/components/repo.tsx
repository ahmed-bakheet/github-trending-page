import { Button, Avatar, Spin } from 'antd';
import { FileOutlined, ForkOutlined, StarOutlined } from '@ant-design/icons';
import '../styles/repo-card.scss'
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Repo } from '../shared/models'
function Repos() {
  //state
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading,setloading]=useState<boolean>(true)
  // methods

  const getRepos = () => {
    axios.get('https://gh-trending-api.herokuapp.com/repositories').then(res => {
      setRepos(res.data)
      setloading(false)
    })
  }

  // life cycle
  useEffect(() => {
    getRepos()
  }, [])


  return (
    <Fragment>
      {
      loading&&
      <div className='loading'><Spin tip="Loading..."></Spin></div>
      }
      {
        repos.map(repo => {
          return (

            <div className='repo-card'>

              <div className='repo-data'>
                <p className=''>
                  <FileOutlined />
                  <span className='repo-name'> {repo.username} / {repo.repositoryName}</span>
                </p>
                <p className='repo-desc'>{repo.description}</p>
                <p className='repo-meta'>
                  <span className='meta-item'>{repo.language}</span>
                  <span className='meta-item'><StarOutlined />{repo.totalStars}</span>
                  <span className='meta-item'><ForkOutlined />{repo.forks}</span>
                  <span className='meta-item'>Built by
                    {
                      repo.builtBy.map(user => {
                        return (
                          <Avatar src={user.avatar} />
                        )
                      })
                    }

                  </span>
                </p>
              </div>
              <div className='repo-actions'>
                <Button icon={<StarOutlined />}>Star</Button>
                <p className='meta-item'><StarOutlined />{repo.starsSince} Stars today</p>

              </div>
            </div>
          )
        })
      }
    </Fragment>

  );
}

export default Repos;
