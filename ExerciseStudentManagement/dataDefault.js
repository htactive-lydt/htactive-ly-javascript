let dataDefault = {
    students: [{
            id: 1,
            name: "Trần Văn Tài",
            birthday: "1999-01-29",
            address: "Đà Nẵng",
            idClass: 1
        },
        {
            id: 2,
            name: "Đoàn Thị Ly",
            birthday: "1999-11-22",
            address: "Minh Tiến",
            idClass: 1
        },
        {
            id: 3,
            name: "Nguyễn Minh Tiến",
            birthday: "1999-11-29",
            address: "Đà Nẵng",
            idClass: 4
        },
        {
            id: 4,
            name: "Trần Gia Hân",
            birthday: "1999-07-03",
            address: "Thanh Hóa",
            idClass: 3
        },
        {
            id: 5,
            name: "Lê Bảo Trân",
            birthday: "1999-06-29",
            address: "Ninh Bình",
            idClass: 2
        },
        {
            id: 6,
            name: "Trần Thiên Ân",
            birthday: "1979-01-29",
            address: "Quảng Trị",
            idClass: 3
        },
        {
            id: 7,
            name: "Nguyễn Thành Nam",
            birthday: "1999-01-04",
            address: "Quảng Bình",
            idClass: 4
        }
    ],
    classes: [{
            id: 1,
            name: "PNV20A",
            idTeacher: 1,
        },
        {
            id: 2,
            name: "PNV20B",
            idTeacher: 2,
        },
        {
            id: 3,
            name: "PNV19B",
            idTeacher: 3,
        },
        {
            id: 4,
            name: "PNV19A",
            idTeacher: 4,
        },
    ],
    teachers: [{
            id: 1,
            name: 'Đặng Nguyễn Nguyên Phương',
            phone: '0916483683',
            idClass: 1
        },
        {
            id: 2,
            name: 'Nguyễn Trần Đông',
            phone: '0916483683',
            idClass: 4
        },
        {
            id: 3,
            name: 'Lê Song Ân',
            phone: '0916483683',
            idClass: 3
        },
        {
            id: 4,
            name: 'Phan Nhật Minh',
            phone: '0916483683',
            idClass: 2
        }
    ],
    subject: [{
            id: 1,
            name: "Math"
        },
        {
            id: 2,
            name: "English"
        },
        {
            id: 3,
            name: "Information Technology"
        }
    ],
    scores: [{
            subjectId: 1,
            idStudent: 2,
            score: 10
        },
        {
            subjectId: 2,
            idStudent: 2,
            score: 9
        },
        {
            subjectId: 3,
            idStudent: 1,
            score: 10
        }
    ]
}
data = JSON.parse(localStorage.getItem("items"));

if (data === undefined || data === null) {
    localStorage.setItem("items", JSON.stringify(dataDefault));
}