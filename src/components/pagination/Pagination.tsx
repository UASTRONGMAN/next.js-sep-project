'use client'

import { useSearchParams, useRouter } from "next/navigation";
import { FC } from "react";
import {IResponseModel} from "@/models/IResponseModel";


interface IProps {
    props: IResponseModel;
}

const Pagination: FC<IProps> = ({ props }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const skip = Number(searchParams.get("skip") ?? "0");
    const limit = 30;
    const total = props.total;

    const pageUp = () => {
        const nextSkip = skip + limit;
        if (nextSkip < total) {
            router.push(`?skip=${nextSkip}`);
        }
    };

    const pageDown = () => {
        const prevSkip = Math.max(skip - limit, 0);
        router.push(`?skip=${prevSkip}`);
    };

    return (
        <div>
            <button onClick={pageDown} disabled={skip === 0}>Prev</button>
            <button onClick={pageUp} disabled={skip + limit >= total}>Next</button>
        </div>
    );
};

export default Pagination;
