import * as React from 'react';
import { Box, Container } from "@mui/system";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { Button, Checkbox, FormControlLabel, TextField, Typography, MenuItem,  } from "@mui/material";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const currencies = [ //naver 기준
    {
        value: 'sex',
        label: '성별',
    },
    {
        value: 'male',
        label: '남성',
    },
    {
        value: 'female',
        label: '여성',
    },
    {
        value: 'none',
        label: '선택안함',
    },

]; // 성별

const Month = [
    {
        value: 'none',
        label: '월',
    },
    {
        value: '1',
        label: '1월',
    },
    {
        value: '2',
        label: '2월',
    },
    {
        value: '3',
        label: '3월',
    },
    {
        value: '4',
        label: '4월',
    },
    {
        value: '5',
        label: '5월',
    },
    {
        value: '6',
        label: '6월',
    },
    {
        value: '7',
        label: '7월',
    },
    {
        value: '8',
        label: '8월',
    },
    {
        value: '9',
        label: '9월',
    },
    {
        value: '10',
        label: '10월',
    },
    {
        value: '11',
        label: '11월',
    },
    {
        value: '12',
        label: '12월',
    },
]; //월 (생년월일)


function Signup() {



    const [currency, setCurrency] = React.useState('sex');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [month, setMonth] = React.useState('none');
    const handleChange2 = (event) => {
        setMonth(event.target.value);
    };

    const [email, setEmail] = useState("");


    const onEmailChange = (e) => {
        //e : 이벤트 객체
        setEmail(e.target.value); //이벤트를 받는 타겟의 value값으로 변경

    }

    const [pwd, setPwd] = useState("");

    const onPwdChange = (e) => {
        //e : 이벤트 객체
        setPwd(e.target.value); //이벤트를 받는 타겟의 value값으로 변경
    }

    const navigate = useNavigate();

    const MoveLogin = () => {
        navigate(`/login`); // 로그인 페이지로 이동
    };

    return (
        <Box sx={{ mt: 5 }}>
            <Container sx={{ textAlign: 'center', border: 2, borderRadius: 10, borderColor: 'primary.main', width: 1 / 2 }}>
                <Box>
                    <CloudCircleIcon sx={{ fontSize: 50, color: 'primary.main', mt: 1 }} />
                </Box>
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <TextField sx={{
                    width: 1, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },
                }}
                           label="이메일 아이디"
                           name="email"
                           onChange={onEmailChange}
                           value={email}

                />
                <TextField sx={{
                    width: 1, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="비밀번호"
                           type="password"
                           helperText="8~16자 영문, 숫자, 특수문자를 사용하세요."
                           name="password"
                           onChange={onPwdChange}
                           value={pwd}
                />

                <TextField sx={{
                    width: 1, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="비밀번호 확인"
                           type="password"
                           name="pwdCheck"
                />


                <TextField sx={{
                    width: 0.3, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="이름"
                           type="name"
                           name="name"
                />
                <TextField sx={{
                    width: 0.4, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="전화번호"
                           type="number"

                           name="phone"
                />

                <TextField sx={{
                    width: 0.3, mt: 2,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           id="sex"
                           select
                           label="성별"
                           value={currency}
                           onChange={handleChange}


                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Typography sx={{
                    mt: 1,
                    display: 'flex',
                    justifyContent: 'flex'
                }}
                            component="h3" variant="h7">
                    생년월일
                </Typography>

                <TextField sx={{
                    width: 0.4, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="년도(4자)"
                           type="number"
                           name="year"
                />
                <TextField sx={{
                    width: 0.3, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           id="month"
                           select
                           label="월"
                           value={month}
                           onChange={handleChange2}


                >
                    {Month.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField sx={{
                    width: 0.3, mt: 1,
                    '.MuiInputBase-root': {
                        borderRadius: 5,
                        borderColor: "primary.main",
                    },

                }}
                           label="일"
                           type="number"

                           name="day"
                />



                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end'}}>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'primary.main' }} />} label="회원가입 약관에 동의합니다." sx={{ display: 'inline', alignSelf: 'left', color: 'primary.main'}} />
                </Box>

                <Box>
                    <Button variant="outlined" sx={{ width: 1 / 2, mt: 2, mb: 5}} onClick={(event) => {event.preventDefault(); console.log("id : " + email +" pwd : " + pwd); MoveLogin({});}}> 가입하기 </Button>
                </Box>

            </Container>
        </Box>
    );
}

export default Signup;