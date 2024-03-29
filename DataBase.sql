PGDMP                         {            SINNAT    15.2    15.2 "               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24658    SINNAT    DATABASE     ~   CREATE DATABASE "SINNAT" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "SINNAT";
                postgres    false                       0    0    DATABASE "SINNAT"    COMMENT     8   COMMENT ON DATABASE "SINNAT" IS 'TALLERES DE ROBOTICA';
                   postgres    false    3356            �            1259    24875 
   acudientes    TABLE       CREATE TABLE public.acudientes (
    acudienteid integer NOT NULL,
    nombre character(30),
    apellido character(30),
    cedula character(30) NOT NULL,
    correo character(30) NOT NULL,
    direccion character(40),
    telefono character(10),
    forma_pago character(40)
);
    DROP TABLE public.acudientes;
       public         heap    postgres    false            �            1259    24874    acudientes_acudienteid_seq    SEQUENCE     �   CREATE SEQUENCE public.acudientes_acudienteid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.acudientes_acudienteid_seq;
       public          postgres    false    215                       0    0    acudientes_acudienteid_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.acudientes_acudienteid_seq OWNED BY public.acudientes.acudienteid;
          public          postgres    false    214            �            1259    24894    administrador    TABLE     �   CREATE TABLE public.administrador (
    administradorid integer NOT NULL,
    usuario character(30),
    "contraseÑa" character(30)
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    24893 !   administrador_administradorid_seq    SEQUENCE     �   CREATE SEQUENCE public.administrador_administradorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.administrador_administradorid_seq;
       public          postgres    false    219                       0    0 !   administrador_administradorid_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.administrador_administradorid_seq OWNED BY public.administrador.administradorid;
          public          postgres    false    218            �            1259    24882    estudiantes    TABLE     �  CREATE TABLE public.estudiantes (
    estudianteid integer NOT NULL,
    nombre character(50) NOT NULL,
    identificacion character(30) NOT NULL,
    edad integer NOT NULL,
    fecha_nacimiento date NOT NULL,
    ultimo_grado character(10) NOT NULL,
    escuela character(40) NOT NULL,
    referido character(2) NOT NULL,
    nombre_referido character(30),
    horario_dia character(12) NOT NULL,
    horario_hora time without time zone NOT NULL,
    acudiente character(30) NOT NULL
);
    DROP TABLE public.estudiantes;
       public         heap    postgres    false            �            1259    24881    estudiantes_estudianteid_seq    SEQUENCE     �   CREATE SEQUENCE public.estudiantes_estudianteid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.estudiantes_estudianteid_seq;
       public          postgres    false    217                        0    0    estudiantes_estudianteid_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.estudiantes_estudianteid_seq OWNED BY public.estudiantes.estudianteid;
          public          postgres    false    216            �            1259    24901 
   inventario    TABLE     �   CREATE TABLE public.inventario (
    articuloid integer NOT NULL,
    nombre character(50) NOT NULL,
    precio character(30) NOT NULL,
    cantidad character(50) NOT NULL
);
    DROP TABLE public.inventario;
       public         heap    postgres    false            �            1259    24900    inventario_articuloid_seq    SEQUENCE     �   CREATE SEQUENCE public.inventario_articuloid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.inventario_articuloid_seq;
       public          postgres    false    221            !           0    0    inventario_articuloid_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.inventario_articuloid_seq OWNED BY public.inventario.articuloid;
          public          postgres    false    220            t           2604    24878    acudientes acudienteid    DEFAULT     �   ALTER TABLE ONLY public.acudientes ALTER COLUMN acudienteid SET DEFAULT nextval('public.acudientes_acudienteid_seq'::regclass);
 E   ALTER TABLE public.acudientes ALTER COLUMN acudienteid DROP DEFAULT;
       public          postgres    false    215    214    215            v           2604    24897    administrador administradorid    DEFAULT     �   ALTER TABLE ONLY public.administrador ALTER COLUMN administradorid SET DEFAULT nextval('public.administrador_administradorid_seq'::regclass);
 L   ALTER TABLE public.administrador ALTER COLUMN administradorid DROP DEFAULT;
       public          postgres    false    218    219    219            u           2604    24885    estudiantes estudianteid    DEFAULT     �   ALTER TABLE ONLY public.estudiantes ALTER COLUMN estudianteid SET DEFAULT nextval('public.estudiantes_estudianteid_seq'::regclass);
 G   ALTER TABLE public.estudiantes ALTER COLUMN estudianteid DROP DEFAULT;
       public          postgres    false    217    216    217            w           2604    24904    inventario articuloid    DEFAULT     ~   ALTER TABLE ONLY public.inventario ALTER COLUMN articuloid SET DEFAULT nextval('public.inventario_articuloid_seq'::regclass);
 D   ALTER TABLE public.inventario ALTER COLUMN articuloid DROP DEFAULT;
       public          postgres    false    220    221    221                      0    24875 
   acudientes 
   TABLE DATA           t   COPY public.acudientes (acudienteid, nombre, apellido, cedula, correo, direccion, telefono, forma_pago) FROM stdin;
    public          postgres    false    215   ~(                 0    24894    administrador 
   TABLE DATA           P   COPY public.administrador (administradorid, usuario, "contraseÑa") FROM stdin;
    public          postgres    false    219   �(                 0    24882    estudiantes 
   TABLE DATA           �   COPY public.estudiantes (estudianteid, nombre, identificacion, edad, fecha_nacimiento, ultimo_grado, escuela, referido, nombre_referido, horario_dia, horario_hora, acudiente) FROM stdin;
    public          postgres    false    217   )                 0    24901 
   inventario 
   TABLE DATA           J   COPY public.inventario (articuloid, nombre, precio, cantidad) FROM stdin;
    public          postgres    false    221   �)       "           0    0    acudientes_acudienteid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.acudientes_acudienteid_seq', 1, true);
          public          postgres    false    214            #           0    0 !   administrador_administradorid_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.administrador_administradorid_seq', 1, false);
          public          postgres    false    218            $           0    0    estudiantes_estudianteid_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.estudiantes_estudianteid_seq', 1, true);
          public          postgres    false    216            %           0    0    inventario_articuloid_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.inventario_articuloid_seq', 1, false);
          public          postgres    false    220            y           2606    24880    acudientes pk_acudiente 
   CONSTRAINT     Y   ALTER TABLE ONLY public.acudientes
    ADD CONSTRAINT pk_acudiente PRIMARY KEY (cedula);
 A   ALTER TABLE ONLY public.acudientes DROP CONSTRAINT pk_acudiente;
       public            postgres    false    215            }           2606    24899    administrador pk_administrador 
   CONSTRAINT     i   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT pk_administrador PRIMARY KEY (administradorid);
 H   ALTER TABLE ONLY public.administrador DROP CONSTRAINT pk_administrador;
       public            postgres    false    219                       2606    24906    inventario pk_articulo 
   CONSTRAINT     \   ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT pk_articulo PRIMARY KEY (articuloid);
 @   ALTER TABLE ONLY public.inventario DROP CONSTRAINT pk_articulo;
       public            postgres    false    221            {           2606    24887    estudiantes pk_estudiante 
   CONSTRAINT     a   ALTER TABLE ONLY public.estudiantes
    ADD CONSTRAINT pk_estudiante PRIMARY KEY (estudianteid);
 C   ALTER TABLE ONLY public.estudiantes DROP CONSTRAINT pk_estudiante;
       public            postgres    false    217            �           2606    24888    estudiantes fk_acudientes    FK CONSTRAINT     �   ALTER TABLE ONLY public.estudiantes
    ADD CONSTRAINT fk_acudientes FOREIGN KEY (acudiente) REFERENCES public.acudientes(cedula);
 C   ALTER TABLE ONLY public.estudiantes DROP CONSTRAINT fk_acudientes;
       public          postgres    false    215    217    3193               k   x�3��I-��LU�8��J�pI�,M,M,�-,�J'&���O㐞��������NN��IU03vR(.-�m�����������1gjZjrIfY>�`����� +�*�            x������ � �         �   x�3�,JLKL�Q pX�X�Y��`�62�4��4�50�50�LIM���K䕦�%*�ޘ�SR�Rs���4�8��-1)�H�=���DL@%��E%��0'�X �m&��������� ��1z            x������ � �     