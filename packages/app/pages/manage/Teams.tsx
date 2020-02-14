import React, { ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetTeams } from '../../queries/Teams';
import { Table } from 'antd';

const Teams = (): ReactElement => {
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
      Teams:

      <Table dataSource={data && data.teams} columns={columns} pagination={false} />
    </div>
  )
}

export default Teams;
