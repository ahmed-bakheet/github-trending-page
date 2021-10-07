import { useEffect, useState } from 'react';
import '../styles/trending.scss'
import '../styles/developer-card.scss'
import Repo from './repo'
import Developer from './developer'
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Radio, Divider, Menu, Dropdown, } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';


function Trending() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>('')

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == '/developers') {
      setActiveTab('developers')
    }
    if (location.pathname == '/repos' || location.pathname == '/') {
      setActiveTab('repos')

    }
  })
  //components
  const NotFound = () => {
    return (
      <p className='not-found'>Page Not found</p>
    )
  }
  const menu = (
    <Menu>
      <Menu.Item key="0">
        Any
      </Menu.Item>
      <Menu.Item key="1">
        Demo1
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" >
        Demo2
      </Menu.Item>
    </Menu>
  );

  return (
    <div className='github-trending'>
      <div className='page-header'>
        <h1>Trending</h1>
        <p>See what the GitHub community is most excited about today.</p>
      </div>
      <Divider />

      <div className='trending-content'>

        <div className='trending-header'>
          <Radio.Group value={activeTab} style={{ marginBottom: 8 }}>
            <Link to='/repos'><Radio.Button value={'repos'}>
              Repositories
            </Radio.Button></Link>
            <Link to='/developers'><Radio.Button value={'developers'}>
              Developers
            </Radio.Button></Link>
          </Radio.Group>
          <div className='trending-right-side'>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Spoken Language:Any <DownOutlined />
              </a>
            </Dropdown>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Language:Any <DownOutlined />
              </a>
            </Dropdown>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Date Range:Today <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>


        <Switch>
          <Route exact path={`/`} render={(props) => <Repo />} />
          <Route exact path={`/repos`} render={(props) => <Repo />} />
          <Route exact path={`/developers`} render={(props) => <Developer />} />
          <Route component={NotFound} />
        </Switch>



      </div>




    </div>



  );
}

export default Trending;
