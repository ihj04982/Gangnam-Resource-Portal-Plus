import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Sewage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* 제목 */}
      <Typography variant="h6" gutterBottom fontWeight="bold">
        정화조 청소
      </Typography>

      {/* 정의 */}
      <List>
        <ListItem sx={{ paddingLeft: 0 }}>
          <ListItemText
            primary={
              <Typography variant="subtitle1" fontWeight="bold">
                • 정화조(개인하수처리시설)
              </Typography>
            }
            secondary={
              <Typography variant="body2">
                수세식 화장실에서 나오는 분뇨를 정화하여 하수도로 보내는 수질오염 방지장치입니다.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* 정화조 청소 연 1회 이상 실시 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={2}>
        • 정화조 청소 연 1회 이상 실시
      </Typography>
      <Typography variant="body2" paragraph>
        정화조의 청소는 정화조 내부 상단의 부유물질(슬러지) 및 가라앉아 고여 있는 오니를 처리하는 것으로 부유물질이 1년
        이상 경과되면 딱딱하게 고형화되어 오수 관로가 막히며 악취가 발생할 수 있으므로 정화조의 기능이 저하되어 방류수의
        수질을 악화시키게 되므로 최소한 연 1회 이상 내부 청소를 실시하여야 합니다.
      </Typography>
      <Typography variant="caption" display="block" gutterBottom color="text.secondary">
        ※ 연 1회 이상 정화조 청소를 하지 않을 경우 100만원이하의 과태료가 부과됩니다. (하수도법 제80조 제4항제1호)
      </Typography>

      {/* 처리용량과 사용인원이 적은 경우... */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>
        • 정화조의 처리용량보다 사용인원이 적은 경우 내부청소를 연 1회이상 실시하여야 하는 이유
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 3 }}>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            정화조의 처리용량보다 적은 인원을 하수도로 규정하고 있는 것은 연 1회로 한정하는 것이 아니고 정화효율을
            증대하기 위해 필요한 경우에는 2회 청소를 실시할 수 있도록 정화조 관리대상인원에 비하여 적게 하더라도 내부
            청소는 연 1회이상 실시해야 합니다.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            정화조의 청소는 정화조 내부 상단의 부유물질(슬러지) 및 가라앉아 고여 있는 오니를 처리하지 위함이고
            사용인원이 적더라도 그 처리시설에서 발생되는 오니의 발생량은 변동이 적기 때문에 상단에 쌓여 있는 부유물질이
            1년이상 경과되면 딱딱하게 굳어질 수 있기 때문에 정화조의 기능 저하로 방류수의 수질을 악화 시킬 수 있으므로
            최소한 연 1회이상 내부 청소를 실시하여야 합니다.
          </Typography>
        </ListItem>
      </List>

      {/* 청소연장 신청 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>
        • 정화조 청소연장 신청
      </Typography>
      <Typography variant="body2" paragraph>
        정화조 청소 후 건물 전체가 공실로 유지되며 정화조 내부에 고형화 우려가 없는 경우 정화조 청소연장 신청(1년)이
        가능합니다.
        <br />* 문의: 강남구청 청소행정과 청소팀 1부, 수도사업소(하수도팀) 1부 (강남수도사업소)
      </Typography>

      {/* 기타 유의사항 */}
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={3}>
        • 기타 유의사항
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 3 }}>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            정화조 내부청소를 하지 않을 경우 악취 발생 및 오염원 방출로 인해 과태료가 부과될 수 있습니다.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', paddingLeft: 0 }}>
          <Typography variant="body2">
            건축법기반 설치 정화조 중 200인용 이상일 경우작정화시설 설치 및 정화조 청소 의무 설치 대상입니다.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sewage;
