import React, { FC } from 'react';
import {useLaunchListQuery} from "../../generated/graphql";

export const App: FC = () => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return (
        <>
            {data.launches?.[0]?.launch_year}
        </>
    );
};

