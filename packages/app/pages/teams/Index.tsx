import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetTeams } from '../../queries/Teams';
import { Table, Button, Row, Col } from 'antd';

const Team = (): ReactElement => {
  const { data } = useQuery(GetTeams);
  const columns = [];

  if (data && data.teams) {
    data.teams.forEach(team => {
      Object.keys(team).forEach(key => {
        columns.push({
          title: key,
          dataIndex: key,
          key: key
        })
      });
    });
  }

  return (
    <div>
      <Row>
        <Col>
          <Button type="primary">Create Team</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table dataSource={data && data.teams} columns={columns} pagination={false} />
        </Col>
      </Row>
    </div>
  )
}

export default Team;
