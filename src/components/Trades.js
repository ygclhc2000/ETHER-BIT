// This component is responsible for showing all filled orders

import { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { decorateFilledOrders } from '../redux/decorators';

const Trades = () => {
    const [orders, setOrders] = useState(null)

    const exchange = useSelector(state => state.exchange)
    const { filledOrders } = exchange

    useEffect(() => {
        if (filledOrders) {

            let _orders = decorateFilledOrders(filledOrders.data)
            setOrders(_orders)

        }
    }, [filledOrders])

    return (
        <div>
            {(!orders) ? (
                <Spinner animation="border" className='mx-auto' style={{ display: 'flex' }} />
            ) : (
                <Table size="sm" className='small'>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>NKC</th>
                            <th>NKC/ETH</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            return (
                                <tr key={order.id} className='table-hover'>
                                    <td>{order.formattedTimestamp}</td>
                                    <td>{order.tokenAmount}</td>
                                    <td style={{ color: `${order.tokenPriceClass}` }}>{order.tokenPrice}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default Trades;