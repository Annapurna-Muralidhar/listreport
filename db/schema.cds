namespace com.satinfotech.hospital;

using {cuid} from '@sap/cds/common';

entity Courses : cuid {
    @title: 'Code'
    code        : String(3);

    @title: 'Description'
    description : String(50);

    @title: 'Books'
    Books       : Composition of many Books
                      on Books.code = $self;
}

entity Books : cuid {
    key ID          : UUID;

        @title: 'Code'
        code        : Association to Courses;

        bookname    : String(20);

        @title: 'Description'
        description : String(20);
}
