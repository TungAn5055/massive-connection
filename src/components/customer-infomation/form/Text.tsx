import {useState, useEffect} from 'react'
import {Col, Row, Form, Input} from 'antd'
import {LIST_ATTRIBUTE_RED_TITLE} from '@/ultils/constants.ts'

export const FormText = ({
     dataCustomer = {},
     attribute,
     isDisabled = false,
     title,
     isRequired = false,
     isCustomSpan = false,
     placeholder = '',
     setValidateAll = () => {
     }
    }: any) => {
    const [value, setValue] = useState('')
    const [errorValue, setErrorValue] = useState<any>({status: false, message: null,})

    setValidateAll([attribute], () => {
        let check = true;
        if (isRequired && !value) {
            check = false;
            setErrorValue({
                status: true,
                message: `Please enter input ${title}`,
            });
        }
        return check;
    });


    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        if (attribute === 'email') {
            if (e.target.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
                setErrorValue({
                    status: true,
                    message: 'The input is not valid E-mail'
                })
            } else {
                setErrorValue({status: false, message: null})
            }
        } else if (attribute === 'repreCustIdNo') {
            if (!/^\d{0,8}$/.test(e.target.value)) {
                setErrorValue({
                    status: true,
                    message: 'Only allow number and max 8 digits'
                })
            } else {
                setErrorValue({status: false, message: null})
            }
        } else if (attribute === 'repreCustTelFax') {
            if (!/^\d+$/.test(e.target.value) || e.target.value.length < 7 || e.target.value.length > 9) {
                setErrorValue({
                    status: true,
                    message: 'Only allow number and form 7 - 9 digits'
                })
            } else {
                setErrorValue({status: false, message: null})
            }
        } else if (attribute === 'position') {
            if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                setErrorValue({
                    status: true,
                    message: 'Only allow character'
                })
            } else {
                setErrorValue({status: false, message: null})
            }
        } else {
            setErrorValue({status: false, message: null})
        }
    }

    useEffect(() => {
        if (attribute && dataCustomer[attribute]) {
            setValue(dataCustomer[attribute])
        }
    }, [dataCustomer])

    return (
        <Form.Item
            rules={
                [
                    // {
                    //     message: 'this is custom',
                    //     validator: (_, value) => {
                    //         if (/^[a-zA-Z0-9]+$/.test(value)) {
                    //             return Promise.resolve();
                    //         } else {
                    //             return Promise.reject('Some message here');
                    //         }
                    //     }
                    // }
                ]
            }
        >
            <Row className={'display-flex'}>
                <Col span={isCustomSpan ? 3 : 6}>
                    <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
                    {isRequired && <span style={{color: 'red'}}> *</span>}
                </Col>
                <Col span={isCustomSpan ? 21 : 18}>
                    <Input
                        size={'large'}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        style={{
                            width: isCustomSpan ? '96%' : '90%'
                        }}
                        disabled={isDisabled}
                        placeholder={placeholder}
                    />
                    {errorValue?.status &&
                        <div style={{color: ' #FD5202'}} className={"message-error"}>{errorValue?.message}</div>}
                </Col>
            </Row>
        </Form.Item>
    )
}
