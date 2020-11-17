import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Button, Typography } from '@material-ui/core';
import { THEME } from "./theme"
import BackButton from "./BackButton"
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ProductTable from './ProductTable'
import { useRouter } from 'next/router'


const TopBar = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const AddButton = styled(Button)`
display : flex;
font-size: 20px;
justify-content: flex-start;
`

const TableWrapper = styled(motion.div)`
    margin-top: 70px;
    width: 100%;
    height: 500px;
`


export default function SelectCondition(props) {
    const router = useRouter();
    const [product, setProduct] = useState({
        name: "Frozen Yoghurt",
        id: "136784"
    })

    return (
        <>
            <TopBar>
                <BackButton color={THEME.primary} onClick={() => { console.log("Go back!!") }} />
                <AddButton variant="contained" color="primary" onClick={() => {
                    console.log("Add Record!!");
                    
                }} >
                    <AddRoundedIcon style={{ fontSize: 32 }} /> <span style={{ marginLeft: 4 }}>เพิ่มตารางบันทึก</span>
                </AddButton>

            </TopBar>
            <TableWrapper>
                <Typography style={{ fontSize: 24, color: THEME.black }} color="primary">
                    รายการ : {product.name}
                </Typography>
                <Typography style={{ fontSize: 24, color: THEME.black }} color="primary">
                    ID :  #{product.id}
                </Typography>
                <ProductTable />
            </TableWrapper>
        </>
    )
}
