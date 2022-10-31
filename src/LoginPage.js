import { Box, Container } from "@mui/system";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

function LoginPage() {
  return (
    <Box sx={{ mt: 5 }}>
      <Container sx={{ textAlign: 'center', border: 2, borderRadius: 10, borderColor: 'primary.main', width: 1 / 2 }}>
        <Box>
          <CloudCircleIcon sx={{ fontSize: 200, color: 'primary.main', mt: 5 }} />
        </Box>
        <TextField sx={{
          width: 1, mt: 10,
          '.MuiInputBase-root': {
            borderRadius: 5,
            borderColor: "primary.main",
          },
        }} />
        <TextField sx={{
          width: 1, mt: 5,
          '.MuiInputBase-root': {
            borderRadius: 5,
            borderColor: "primary.main",
          },
        }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'primary.main' }} />} label="로그인을 유지하겠습니까?" sx={{ display: 'inline', alignSelf: 'left', color: 'primary.main'}} />
          <Button>비밀번호 찾기</Button>
        </Box>

        <Box>
          <Button variant="outlined" sx={{ width: 1 / 2, mt: 5 }}>로그인</Button>
        </Box>
        <Button sx={{ mb: 3 }}>OTL에 처음인가요?</Button>
      </Container>
    </Box>
  );
}

export default LoginPage;
