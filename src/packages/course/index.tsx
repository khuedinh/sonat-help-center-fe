import Tag from "@/components/Tag";
import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";

export default function CourseSection() {
  const theme = useTheme();
  const [value, setValue] = useState("overview");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabList = [
    {
      label: "Thông tin chung",
      value: "overview",
      component: "",
    },
    {
      label: "Nội dung khoá học",
      value: "detail",
      component: "",
    },
    {
      label: "Đánh giá của học viên",
      value: "rating",
      component: "",
    },
    {
      label: "Làm test",
      value: "test",
      component: "",
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.paper, height: "100%" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: 4,
          py: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={3}
        >
          <Image
            src={"/assets/img/sample_course.png"}
            alt="course-thumbnail"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              width: 96,
              height: 96,
              borderRadius: 16,
            }}
          />
          <Stack gap={1.5}>
            <Typography variant="h5">Nhập môn Excel cùng Sonat</Typography>
            <Stack direction="row" gap={1}>
              <Tag>
                <Typography variant="body2" color="primary" fontWeight="medium">
                  12 bài học
                </Typography>
              </Tag>
              <Tag>
                <Typography variant="body2" color="primary" fontWeight="medium">
                  Skill
                </Typography>
              </Tag>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" gap={1.5}>
          <Button variant="outlined">Chỉnh sửa</Button>
          <Button variant="outlined" sx={{ minWidth: "fit-content", px: 1 }}>
            <MoreVert fontSize="small" />
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabList.map((tab, index) => (
            <Tab key={`tab-${index}`} value={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {tabList.map((tab, index) => (
        <Box
          key={`tab-panel-${index}`}
          role="tabpanel"
          hidden={value !== tab.value}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
        >
          {value === tab.value && <Box sx={{ p: 3 }}>{tab.component}</Box>}
        </Box>
      ))}
    </Box>
  );
}