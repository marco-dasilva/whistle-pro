import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TEAMS } from '../../queries/Teams';
import { Table, Button, Row, Col } from 'antd';
import Link from 'next/link';
import { withAuthSync } from '../../util/auth';

const Team = (): ReactElement => {
  const { data } = useQuery(GET_TEAMS);
  const columns = [];

  if (data && data.teams) {
    data.teams.forEach(team => {
      Object.keys(team).forEach(key => {
        const hasKey = columns.filter(col => col.key === key);
        if (hasKey.length === 0) {
          columns.push({
            title: key,
            dataIndex: key,
            key: key
          });
        }
      });
    });
  }

  return (
    <div>
      <Row>
        <Col>
          <Link href="/teams/create">
            <Button type="primary">Create Team</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table dataSource={data && data.teams} rowKey="id" columns={columns} pagination={false} />
        </Col>
      </Row>
    </div>
  )
}

export default withAuthSync(Team);
