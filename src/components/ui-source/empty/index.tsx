import React from 'react';
import { Empty } from 'antd';

export const EmptyUI = ({content}) => {
    return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={content} />
    );
}