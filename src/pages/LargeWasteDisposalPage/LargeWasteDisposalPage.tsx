import {
  Box,
  Button,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { filterByRegion, type WasteFeeItem } from '../../models/large-waste';
import feeDataRaw from '../../data/national-large-waste-fee-data.json';
import { useNavigate } from 'react-router';

const LargeWasteDisposalPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const feeData = (feeDataRaw as { records?: WasteFeeItem[] }).records ?? [];
  const gangnamFeeData = Array.isArray(feeData) ? filterByRegion<WasteFeeItem>(feeData, '서울특별시', '강남구') : [];

  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h5" gutterBottom>
        ▪ 대형생활폐기물 배출
      </Typography>
      <Box sx={{ border: '1px solid #ccc', borderRadius: 1, p: 3, backgroundColor: '#e8f5e9' }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          대형생활폐기물이란?
        </Typography>
        <Typography gutterBottom>
          폐가전제품, 이불, 가구, 사무용 자재 등 <strong>크기와 관계없이</strong> 종량제 봉투에 담을 수 없고{' '}
          <strong>분리배출 할 수 없는 폐기물</strong>
        </Typography>
        <Button variant="contained" color="success" sx={{ mt: 2 }} onClick={() => setOpen(true)}>
          수거대상 물품/수수료 확인
        </Button>
        <Typography sx={{ mt: 2, fontSize: 14, color: '#555' }}>
          ※ 버리실 품목이 목록에 없는 경우 유사한 품목으로 선택해 주시거나 기타로 선택 후 고객요청 사항에 품목명, 수량을
          기재해 주세요.
        </Typography>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '80vh',
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '80vh',
            mx: 2,
          }}
        >
          <Box sx={{ p: 4, overflowY: 'auto' }}>
            <Typography variant="h6" gutterBottom>
              ▪ 대형생활폐기물 수거대상 물품/수수료
            </Typography>

            {gangnamFeeData.length > 0 ? (
              <TableContainer sx={{ boxShadow: 'none' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontSize: 14, whiteSpace: 'nowrap', p: 0.5 }}>종류</TableCell>
                      <TableCell sx={{ fontSize: 14, whiteSpace: 'nowrap', p: 0.5 }}>품목</TableCell>
                      <TableCell sx={{ fontSize: 14, width: 50, whiteSpace: 'nowrap', p: 0.5 }}>규격</TableCell>
                      <TableCell sx={{ fontSize: 14, width: 120, whiteSpace: 'nowrap', p: 0.5 }} align="right">
                        수수료(원)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {gangnamFeeData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ fontSize: 12, whiteSpace: 'nowrap', p: 0.5 }}>
                          {item.대형폐기물구분명}
                        </TableCell>
                        <TableCell sx={{ fontSize: 12, whiteSpace: 'nowrap', p: 0.5 }}>{item.대형폐기물명}</TableCell>
                        <TableCell sx={{ fontSize: 12, whiteSpace: 'nowrap', p: 0.5 }}>{item.대형폐기물규격}</TableCell>
                        <TableCell sx={{ fontSize: 12, whiteSpace: 'nowrap', p: 0.5 }} align="right">
                          {Number(item.수수료).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="body2">데이터가 없습니다.</Typography>
            )}
          </Box>
          <Box
            sx={{
              borderTop: '1px solid #ddd',
              p: 2,
              textAlign: 'center',
            }}
          >
            <Button variant="contained" color="success" onClick={() => setOpen(false)}>
              확인
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box sx={{ padding: '24px' }}>
        {/* 배출장소 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ▪ 배출장소
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>일반 건물, 단독주택 및 다세대 : 건물 앞</li>
          <li>공동주택(아파트) : 단지 내 폐기물 배출장</li>
        </Box>
        <Typography variant="body2" color="textSecondary">
          ※ 건물 외부 또는 지정 배출장소에 직접 배출하여야 하며, 수거 장소에 품목이 확인되지 않을 경우 수거되지 않을 수
          있습니다.
        </Typography>

        {/* 신청방법 및 수거안내 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 6 }}>
          ▪ 신청방법 및 수거 안내
        </Typography>
        <Box sx={{ pl: 1 }}>
          <Typography variant="body1">
            • 수거일 : 매주 <strong>월 ~ 토요일</strong> (일, 공휴일 제외)
          </Typography>
          <Typography variant="body1">
            • 수거 신청 : <strong>배출 3일 전</strong>까지 사전 신청
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            ※ 신청일 다음날(영업일 기준) 수거업체에서 안내 문자 발송
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • 배출 방법 : 접수증 출력 후 부착 또는 접수번호를 표기 후 배출
          </Typography>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  border: '1px solid #aaa',
                  borderRadius: 1,
                  p: 2,
                  textAlign: 'center',
                  bgcolor: '#f1f8e9',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <Typography fontWeight="bold" gutterBottom>
                    신청
                  </Typography>
                  <Typography variant="body2">배출 3일 전 사전신청</Typography>
                </div>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 2 }}
                  onClick={() => navigate('/largewaste/registration')}
                >
                  수거 신청
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  border: '1px solid #aaa',
                  borderRadius: 1,
                  p: 2,
                  textAlign: 'center',
                  bgcolor: '#f1f8e9',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography fontWeight="bold" gutterBottom>
                  신청서 작성·결제
                </Typography>
                <Typography variant="body2">배출일, 배출장소, 배출품목 입력 후 수수료 결제</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  border: '1px solid #aaa',
                  borderRadius: 1,
                  p: 2,
                  textAlign: 'center',
                  bgcolor: '#f1f8e9',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography fontWeight="bold" gutterBottom>
                  배출
                </Typography>
                <Typography variant="body2">해당 장소에 접수증 부착 후 배출</Typography>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            ※ 무상수거 대상(소형폐가전, 대형폐가전) 가능 여부를 확인하신 후 신청해 주세요.
          </Typography>
        </Box>

        {/* 배출취소 및 환불 문의 */}
        <Typography variant="h6" gutterBottom sx={{ mt: 6 }}>
          ▪ 배출취소 및 환불 문의
        </Typography>
        <Box sx={{ pl: 1 }}>
          <Typography variant="body1">• 신청취소 : 배출예정일 전까지 가능</Typography>
          <Typography variant="body1">• ‘배출 신청내역 확인’ 페이지에서 취소요청 버튼 클릭</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            ※ 수거 한 이후 취소 및 환불 불가
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            • 전화 문의 :
          </Typography>
          <Typography variant="body2" sx={{ pl: 2 }}>
            - 접수 및 환불 관련 문의 : 태화용역 ☎ 1522-3833
          </Typography>
          <Typography variant="body2" sx={{ pl: 2 }}>
            - 담당 부서 : 강남구청 자원순환과 ☎ 02-3423-5974
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LargeWasteDisposalPage;
