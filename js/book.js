/*!
 * Book.js
 * Author: JP Aguilar
 * Date created: 03 MAR 2018
 * Date modified: 25 MAR 2018
 * Email: bhest.pat@gmail.com; jp.eaguilar@gmail.com
 *
 * Copyright (C) 2018 JP Aguilar
 * All rights reserved
 */
var _0x29a3=["\x62\x6F\x6F\x6B","\x66\x6E","\x6F\x6C\x64","\x65\x78\x74\x65\x6E\x64","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74","\x63\x68\x61\x6E\x67\x65\x64\x54\x6F\x75\x63\x68\x65\x73","\x6E\x6F\x6E\x65","\x70\x61\x67\x65\x58","\x70\x61\x67\x65\x59","\x67\x65\x74\x54\x69\x6D\x65","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65","\x74\x6F\x75\x63\x68\x65\x6E\x64","\x61\x62\x73","\x6C\x65\x66\x74","\x72\x69\x67\x68\x74","\x75\x70","\x64\x6F\x77\x6E","\x6E\x6F\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E","\x61\x64\x64\x43\x6C\x61\x73\x73","\x2E\x70\x61\x67\x65","\x66\x69\x6E\x64","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x70\x61\x67\x65\x5B\x64\x61\x74\x61\x2D\x70\x61\x67\x65\x3D\x22","\x22\x5D","\x6C\x65\x6E\x67\x74\x68","\x70\x72\x65\x76","\x2E\x63\x75\x72\x72\x65\x6E\x74","\x70\x72\x65\x76\x69\x6F\x75\x73","\x6E\x65\x78\x74","\x63\x75\x72\x72\x65\x6E\x74","\x72\x6F\x74\x61\x74\x65\x59\x28\x2D\x31\x38\x30\x64\x65\x67\x29","\x63\x73\x73","\x7A\x2D\x69\x6E\x64\x65\x78","\x72\x6F\x74\x61\x74\x65\x59\x28\x30\x64\x65\x67\x29","\x2E\x70\x72\x65\x76\x69\x6F\x75\x73","\x61\x75\x74\x6F","\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73","\x55\x6E\x74\x69\x74\x6C\x65\x64","","\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x6D\x61\x78","\x63\x6C\x69\x65\x6E\x74\x48\x65\x69\x67\x68\x74","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x70\x61\x67\x65","\x64\x61\x74\x61","\x74\x65\x78\x74","\x2E\x6D\x69\x73\x63\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x20\x2E\x62\x74\x6E\x2D\x67\x6F\x74\x6F\x70\x61\x67\x65","\x77\x69\x64\x74\x68","\x30\x25","\x2E\x6D\x69\x73\x63\x20\x2E\x70\x72\x6F\x67\x72\x65\x73\x73\x20\x2E\x62\x61\x72","\x66\x6C\x6F\x6F\x72","\x25","\x72\x65\x6D\x65\x6D\x62\x65\x72","\x2A","\x6F\x62\x6A\x65\x63\x74","\x74\x61","\x74\x69\x6D\x65\x6C\x69\x67\x68\x74\x73\x2D\x62\x6F\x6F\x6B","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x74\x49\x74\x65\x6D","\x73\x70\x6C\x69\x63\x65","\x67\x65\x74\x49\x74\x65\x6D","\x73\x74\x72\x69\x6E\x67","\x70\x61\x72\x73\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x66\x69\x6E\x64\x49\x6E\x64\x65\x78","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x67\x65\x73\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x70\x70\x65\x6E\x64","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x75\x72\x6E\x65\x72\x2D\x6C\x65\x66\x74\x20\x72\x69\x70\x70\x6C\x65\x20\x72\x69\x70\x70\x6C\x65\x2D\x64\x61\x72\x6B\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x75\x72\x6E\x65\x72\x2D\x72\x69\x67\x68\x74\x20\x72\x69\x70\x70\x6C\x65\x20\x72\x69\x70\x70\x6C\x65\x2D\x64\x61\x72\x6B\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x69\x73\x63\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x64\x65\x66\x61\x75\x6C\x74","\x31\x30\x30\x30\x70\x78","\x68\x69\x64\x64\x65\x6E","\x63\x6C\x69\x63\x6B","\x68\x69\x64\x65","\x6F\x6E","\x2E\x74\x75\x72\x6E\x65\x72\x2D\x6C\x65\x66\x74","\x2E\x74\x75\x72\x6E\x65\x72\x2D\x72\x69\x67\x68\x74","\x74\x72\x69\x6D","\x2E\x74\x65\x78\x74","\x68\x74\x6D\x6C","\x74\x65\x73\x74","\x69\x6E\x64\x65\x78","\x65\x78\x65\x63","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3D\x61\x75\x74\x68\x6F\x72\x28\x22","\x22\x29","\x72\x65\x70\x6C\x61\x63\x65","\x3D\x74\x69\x74\x6C\x65\x28\x22","\x3D\x73\x79\x6E\x6F\x70\x73\x69\x73\x28\x22","\x69\x6D\x61\x67\x65\x54\x65\x78\x74","\x69\x6D\x67","\x3C\x69\x6D\x67\x20\x64\x61\x74\x61\x2D\x62\x6C\x61\x6E\x6B\x3D\x22\x74\x72\x75\x65\x22\x20\x64\x61\x74\x61\x2D\x70\x61\x67\x65\x3D\x22\x6E\x6F\x70\x65\x22\x3E","\x73\x72\x63","\x61\x74\x74\x72","\x70\x61\x67\x65\x2D\x6E\x75\x6D\x62\x65\x72","\x72\x65\x6D\x6F\x76\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x67\x65\x20","\x70\x61\x70\x65\x72","\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x70\x61\x72\x73\x65\x48\x54\x4D\x4C","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x20\x69\x6D\x61\x67\x65\x20","\x75\x72\x6C\x28","\x29","\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74","\x70\x72\x65\x70\x65\x6E\x64","\x2E\x70\x61\x67\x65\x73","\x62\x6C\x61\x6E\x6B","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x20","\x20\x66\x72\x6F\x6E\x74\x20\x69\x6D\x61\x67\x65\x20","\x2E\x70\x61\x67\x65\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28\x31\x29","\x20\x62\x61\x63\x6B\x20\x69\x6D\x61\x67\x65\x20","\x65\x61\x63\x68","\x73\x6C\x69\x63\x65","\x3C\x68\x33\x3E","\x3C\x2F\x68\x33\x3E","\x3C\x70\x3E","\x70\x75\x73\x68","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x20\x63\x6F\x76\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3C\x68\x31\x3E","\x3C\x2F\x68\x31\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3C\x73\x70\x61\x6E\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x09","\x3D\x63\x6F\x76\x65\x72","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x20\x69\x6D\x61\x67\x65\x20\x6E\x6F\x70\x65\x22\x3E\x49\x4D\x41\x47\x45\x3C\x2F\x64\x69\x76\x3E","\x46\x4F\x52\x4D\x41\x54\x3A\x20\x28\x28\x75\x72\x6C\x20\x68\x65\x72\x65\x29\x29\x3D\x69\x6D\x61\x67\x65","\x6C\x6F\x67","\x4E\x6F\x20\x69\x6D\x61\x67\x65\x20\x55\x52\x4C\x20\x66\x6F\x75\x6E\x64\x20\x61\x74\x20\x79\x6F\x75\x72\x20\x63\x68\x61\x70\x74\x65\x72","\x3D\x69\x6D\x61\x67\x65","\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x67\x65\x20","\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09","\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09","\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x63\x68\x65\x63\x6B","\x70\x61\x72\x65\x6E\x74","\x6F\x66\x66\x73\x65\x74\x48\x65\x69\x67\x68\x74","\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x0A","\x28\x28","\x29\x29","\x20","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x70","\x63\x68\x61\x72\x41\x74","\x3C","\x3C\x70\x20\x63\x6C\x61\x73\x73\x3D\x22\x6E\x6F\x2D\x69\x6E\x64\x65\x6E\x74\x22\x3E","\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x67\x65\x20","\x20\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x63\x68\x65\x63\x6B\x22\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x09\x3C\x2F\x64\x69\x76\x3E","\x62\x65\x66\x6F\x72\x65","\x2E\x63\x6F\x6E\x74\x65\x6E\x74","\x2E\x70\x61\x67\x65\x2E\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x63\x68\x65\x63\x6B","\x2E\x6F\x76\x65\x72\x66\x6C\x6F\x77\x2D\x63\x68\x65\x63\x6B","\x68\x65\x69\x67\x68\x74","\x39\x32\x25","\x2E\x70\x61\x67\x65\x73\x20\x2E\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x6E\x6F\x74\x28\x2E\x69\x6D\x61\x67\x65\x29","\x3C\x2F\x70\x3E","\x64\x61\x74\x61\x2D\x70\x61\x67\x65","\x0D\x0A\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x67\x65\x2D\x6E\x75\x6D\x62\x65\x72\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x23\x30\x30\x30\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09","\x2E\x62\x61\x63\x6B","\x63\x6C\x6F\x6E\x65","\x2E\x70\x61\x67\x65\x2D\x6E\x75\x6D\x62\x65\x72","\x2E\x66\x72\x6F\x6E\x74","\x6C\x61\x73\x74","\x73\x68\x6F\x77","\x6B\x65\x79\x43\x6F\x64\x65","\x6B\x65\x79\x64\x6F\x77\x6E","\x0D\x0A\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x72\x6F\x67\x72\x65\x73\x73\x22\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x61\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x68\x61\x6E\x64\x6C\x65\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x69\x73\x63\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x22\x3E\x0D\x0A\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x2D\x67\x6F\x74\x6F\x70\x61\x67\x65\x20\x72\x69\x70\x70\x6C\x65\x20\x72\x69\x70\x70\x6C\x65\x2D\x64\x61\x72\x6B\x22\x3E\x31\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x3C\x62\x72\x3E\x0D\x0A\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x2D\x73\x77\x69\x70\x65\x61\x62\x6C\x65\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x31\x30\x70\x78\x22\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x22\x3E\x54\x49\x54\x4C\x45\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x2D\x76\x61\x6C\x75\x65\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x22\x3E\x41\x55\x54\x48\x4F\x52\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x2D\x76\x61\x6C\x75\x65\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x61\x64\x20\x72\x69\x70\x70\x6C\x65\x20\x72\x69\x70\x70\x6C\x65\x2D\x64\x61\x72\x6B\x22\x3E\x52\x45\x41\x44\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x0D\x0A\x0D\x0A\x09\x09\x09\x09\x09\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09","\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x22\x3E\x53\x59\x4E\x4F\x50\x53\x49\x53\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09\x09\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x65\x6C\x64\x2D\x76\x61\x6C\x75\x65\x20\x73\x79\x6E\x6F\x70\x73\x69\x73\x22\x3E","\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x09\x09\x09\x09\x09","\x2E\x6D\x69\x73\x63\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x2E\x6D\x69\x73\x63","\x2E\x6D\x69\x73\x63\x20\x2E\x68\x61\x6E\x64\x6C\x65","\x73\x68\x6F\x77\x61\x6C\x6C","\x2E\x6D\x69\x73\x63\x20\x2E\x66\x69\x65\x6C\x64\x2D\x73\x77\x69\x70\x65\x61\x62\x6C\x65","\x2E\x72\x69\x70\x70\x6C\x65\x2D\x77\x61\x76\x65","\x63\x75\x72\x72\x65\x6E\x74\x54\x61\x72\x67\x65\x74","\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68","\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x69\x70\x70\x6C\x65\x2D\x77\x61\x76\x65\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x6F\x66\x66\x73\x65\x74","\x74\x6F\x70","\x2E\x72\x69\x70\x70\x6C\x65","\x72\x65\x61\x64\x79","\x2E\x6D\x69\x73\x63\x20\x2E\x72\x65\x61\x64","\x47\x6F\x20\x54\x6F\x20\x50\x61\x67\x65\x3A","\x2E\x62\x74\x6E\x2D\x67\x6F\x74\x6F\x70\x61\x67\x65","\x50\x61\x67\x65\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64\x21","\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x59\x28\x35\x30\x25\x29","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x59\x28\x31\x30\x30\x25\x29","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x59\x28\x30\x25\x29","\x2E\x73\x79\x6E\x6F\x70\x73\x69\x73","\x64\x62\x6C\x63\x6C\x69\x63\x6B","\x2E\x66\x69\x65\x6C\x64\x2D\x73\x77\x69\x70\x65\x61\x62\x6C\x65","\x2E\x6C\x6F\x61\x64","\x37\x35\x30\x70\x78","\x35\x37\x30\x70\x78","\x76\x69\x73\x69\x62\x6C\x65","\x35\x30\x25","\x70\x6F\x69\x6E\x74\x65\x72","\x0D\x0A\x09\x09\x09\x09\x09\x09\x69\x6E\x73\x65\x74\x20\x30\x20\x30\x20\x31\x30\x30\x70\x78\x20\x23\x65\x63\x63\x63\x36\x38\x2C\x0D\x0A\x09\x09\x09\x09\x09\x09\x69\x6E\x73\x65\x74\x20\x30\x20\x30\x20\x31\x30\x30\x70\x78\x20\x23\x64\x34\x64\x34\x64\x32","\x30\x2E\x32\x65\x6D","\x2E\x74\x75\x72\x6E\x65\x72\x2D\x6C\x65\x66\x74\x2C\x2E\x74\x75\x72\x6E\x65\x72\x2D\x72\x69\x67\x68\x74","\x63\x6F\x6D\x70\x6C\x65\x74\x65","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x63\x61\x6C\x6C"];(function(_0x3a21x1){_0x3a21x1[_0x29a3[1]][_0x29a3[0]]= function(_0x3a21x2){var _0x3a21x3=_0x3a21x1[_0x29a3[3]]({imageText:true,paper:_0x29a3[2],remember:true,complete:null},_0x3a21x2);function _0x3a21x4(_0x3a21x5,_0x3a21x6){var _0x3a21x7=_0x3a21x5,_0x3a21x8,_0x3a21x9,_0x3a21xa,_0x3a21xb,_0x3a21xc,_0x3a21xd=50,_0x3a21xe=100,_0x3a21xf=3300,_0x3a21x10,_0x3a21x11,_0x3a21x12=_0x3a21x6|| function(_0x3a21x8){};_0x3a21x7[_0x29a3[11]](_0x29a3[4],function(_0x3a21x13){var _0x3a21x14=_0x3a21x13[_0x29a3[5]][0];_0x3a21x8= _0x29a3[6];dist= 0;_0x3a21x9= _0x3a21x14[_0x29a3[7]];_0x3a21xa= _0x3a21x14[_0x29a3[8]];_0x3a21x11=  new Date()[_0x29a3[9]]();_0x3a21x13[_0x29a3[10]]()},false);_0x3a21x7[_0x29a3[11]](_0x29a3[12],function(_0x3a21x13){_0x3a21x13[_0x29a3[10]]()},false);_0x3a21x7[_0x29a3[11]](_0x29a3[13],function(_0x3a21x13){var _0x3a21x14=_0x3a21x13[_0x29a3[5]][0];_0x3a21xb= _0x3a21x14[_0x29a3[7]]- _0x3a21x9;_0x3a21xc= _0x3a21x14[_0x29a3[8]]- _0x3a21xa;_0x3a21x10=  new Date()[_0x29a3[9]]()- _0x3a21x11;if(_0x3a21x10<= _0x3a21xf){if(Math[_0x29a3[14]](_0x3a21xb)>= _0x3a21xd&& Math[_0x29a3[14]](_0x3a21xc)<= _0x3a21xe){_0x3a21x8= (_0x3a21xb< 0)?_0x29a3[15]:_0x29a3[16]}else {if(Math[_0x29a3[14]](_0x3a21xc)>= _0x3a21xd&& Math[_0x29a3[14]](_0x3a21xb)<= _0x3a21xe){_0x3a21x8= (_0x3a21xc< 0)?_0x29a3[17]:_0x29a3[18]}}};_0x3a21x12(_0x3a21x8);_0x3a21x13[_0x29a3[10]]()},false)}var _0x3a21x15=0;var _0x3a21x16=function(_0x3a21x5,_0x3a21x17){_0x3a21x15++;if(_0x3a21x17){_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[21])[_0x29a3[20]](_0x29a3[19]);_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[24]+ _0x3a21x17+ _0x29a3[25])[_0x29a3[23]](_0x29a3[19])};if(_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[28])[_0x29a3[27]]()[_0x29a3[26]]<= 0){return};_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[28])[_0x29a3[30]]()[_0x29a3[23]](_0x29a3[29]);_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[28])[_0x29a3[33]]({"\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D":_0x29a3[32]})[_0x29a3[23]](_0x29a3[31])[_0x29a3[20]](_0x29a3[29])[_0x29a3[27]]()[_0x29a3[20]](_0x29a3[31]);if(_0x3a21x17){_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[21])[_0x29a3[23]](_0x29a3[19])};if(_0x3a21x22){setTimeout(()=>{_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[28])[_0x29a3[30]]()[_0x29a3[33]](_0x29a3[34],_0x3a21x15)},250)};_0x3a21x23(_0x3a21x1(_0x3a21x5[_0x29a3[22]](_0x29a3[28])))};var _0x3a21x18=function(_0x3a21x5,_0x3a21x17){_0x3a21x15--;if(_0x3a21x17){_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[21])[_0x29a3[20]](_0x29a3[19]);_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[24]+ _0x3a21x17+ _0x29a3[25])[_0x29a3[23]](_0x29a3[19])};if(_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[28])[_0x29a3[30]]()[_0x29a3[26]]<= 0){return};_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[28])[_0x29a3[23]](_0x29a3[31]);_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[36])[_0x29a3[33]]({"\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D":_0x29a3[35]})[_0x29a3[23]](_0x29a3[29])[_0x29a3[20]](_0x29a3[31])[_0x29a3[30]]()[_0x29a3[20]](_0x29a3[29]);if(_0x3a21x17){_0x3a21x1(_0x3a21x5)[_0x29a3[22]](_0x29a3[21])[_0x29a3[23]](_0x29a3[19])};if(_0x3a21x22){_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[28])[_0x29a3[27]]()[_0x29a3[33]](_0x29a3[34],_0x29a3[37])};_0x3a21x23(_0x3a21x1(_0x3a21x5[_0x29a3[22]](_0x29a3[28])))};var _0x3a21x19=this;var _0x3a21x1a=_0x29a3[38];var _0x3a21x1b=_0x29a3[39];var _0x3a21x1c=_0x29a3[40];var _0x3a21x1d=0;var _0x3a21x1e=0;var _0x3a21x1f=1;var _0x3a21x20=Math[_0x29a3[44]](document[_0x29a3[42]][_0x29a3[41]],window[_0x29a3[43]]|| 0);var _0x3a21x21=Math[_0x29a3[44]](document[_0x29a3[42]][_0x29a3[45]],window[_0x29a3[46]]|| 0);var _0x3a21x22=_0x3a21x20>= 750?true:false;function _0x3a21x23(_0x3a21x5){var _0x3a21x24=_0x3a21x1(_0x3a21x5)[_0x29a3[48]](_0x29a3[47]);_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[50])[_0x29a3[49]](_0x3a21x24);_0x3a21x1f= _0x3a21x24;if(_0x3a21x24== 1){_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[53])[_0x29a3[33]](_0x29a3[51],_0x29a3[52])}else {_0x3a21x1e= Math[_0x29a3[54]]((_0x3a21x24/ _0x3a21x1d)* 100);_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[53])[_0x29a3[33]](_0x29a3[51],_0x3a21x1e+ _0x29a3[55])};if(_0x3a21x3[_0x29a3[56]]){_0x3a21x35(_0x3a21x1b,_0x3a21x1a,_0x3a21x1f)}}function _0x3a21x25(_0x3a21x26,_0x3a21x27,_0x3a21x28){var _0x3a21x29=_0x3a21x26+ _0x29a3[57]+ _0x3a21x27;var _0x3a21x2a=[];if(_0x3a21x2f()){var _0x3a21x2b=_0x3a21x31(_0x29a3[58]);for(var _0x3a21x2c of _0x3a21x2b){_0x3a21x2a[_0x3a21x2a[_0x29a3[26]]]= {ta:_0x3a21x2c[_0x29a3[59]],page:_0x3a21x2c[_0x29a3[47]]}}};_0x3a21x2a[_0x3a21x2a[_0x29a3[26]]]= {ta:_0x3a21x29,page:_0x3a21x28};localStorage[_0x29a3[62]](_0x29a3[60],JSON[_0x29a3[61]](_0x3a21x2a))}function _0x3a21x2d(_0x3a21x26,_0x3a21x27,_0x3a21x28){var _0x3a21x29=_0x3a21x26+ _0x29a3[57]+ _0x3a21x27;var _0x3a21x2a=[];if(_0x3a21x2f()){var _0x3a21x2b=_0x3a21x31(_0x29a3[58]);for(var _0x3a21x2c of _0x3a21x2b){_0x3a21x2a[_0x3a21x2a[_0x29a3[26]]]= {ta:_0x3a21x2c[_0x29a3[59]],page:_0x3a21x2c[_0x29a3[47]]}}};var _0x3a21x2e=_0x3a21x34(_0x3a21x29);if(_0x3a21x2e>  -1){if(_0x3a21x28== _0x3a21x1d|| _0x3a21x28== 1){_0x3a21x2a[_0x29a3[63]](_0x3a21x2e,1)}else {_0x3a21x2a[_0x3a21x2e][_0x29a3[47]]= _0x3a21x28};localStorage[_0x29a3[62]](_0x29a3[60],JSON[_0x29a3[61]](_0x3a21x2a))}else {if(_0x3a21x2e<=  -1){_0x3a21x25(_0x3a21x26,_0x3a21x27,_0x3a21x28)}}}function _0x3a21x2f(){var _0x3a21x30=localStorage[_0x29a3[64]](_0x29a3[60]);if(_0x3a21x30){return true}else {return false}}function _0x3a21x31(_0x3a21x32){var _0x3a21x2a=undefined;var _0x3a21x33=localStorage[_0x29a3[64]](_0x29a3[60]);if(_0x3a21x2f()){switch(_0x3a21x32[_0x29a3[67]]()){case _0x29a3[65]:_0x3a21x2a= _0x3a21x33;break;case _0x29a3[58]:_0x3a21x2a= JSON[_0x29a3[66]](_0x3a21x33);break}};return _0x3a21x2a}function _0x3a21x34(_0x3a21x29){var _0x3a21x2b=_0x3a21x31(_0x29a3[58]);var _0x3a21x2c=_0x3a21x2b[_0x29a3[68]]((_0x3a21x2c)=>_0x3a21x2c[_0x29a3[59]]== _0x3a21x29);if(_0x3a21x2c>  -1){return _0x3a21x2c}else {return _0x3a21x2c}}function _0x3a21x35(_0x3a21x26,_0x3a21x27,_0x3a21x28){if(_0x3a21x2f()){_0x3a21x2d(_0x3a21x26,_0x3a21x27,_0x3a21x28)}else {_0x3a21x25(_0x3a21x26,_0x3a21x27,_0x3a21x28)};if(_0x3a21x31(_0x29a3[58])[_0x29a3[26]]<= 0){localStorage[_0x29a3[69]](_0x29a3[60])}}return this[_0x29a3[117]](()=>{_0x3a21x1(this)[_0x29a3[20]](_0x29a3[60]);_0x3a21x1(this)[_0x29a3[71]](_0x29a3[70]);_0x3a21x1(this)[_0x29a3[71]](_0x29a3[72]);_0x3a21x1(this)[_0x29a3[71]](_0x29a3[73]);_0x3a21x1(this)[_0x29a3[71]](_0x29a3[74]);_0x3a21x1(this)[_0x29a3[33]]({"\x63\x75\x72\x73\x6F\x72":_0x29a3[75],"\x70\x65\x72\x73\x70\x65\x63\x74\x69\x76\x65":_0x29a3[76],"\x75\x73\x65\x72\x2D\x73\x65\x6C\x65\x63\x74":_0x29a3[6],"\x6D\x61\x72\x67\x69\x6E":0,"\x70\x61\x64\x64\x69\x6E\x67":0,"\x6F\x76\x65\x72\x66\x6C\x6F\x77":_0x29a3[77]});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[81])[_0x29a3[80]](_0x29a3[78],()=>{_0x3a21x18(_0x3a21x1(this));_0x3a21x60(_0x29a3[79])});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[82])[_0x29a3[80]](_0x29a3[78],()=>{_0x3a21x16(_0x3a21x1(this));_0x3a21x60(_0x29a3[79])});var _0x3a21x36=_0x3a21x1(this)[_0x29a3[22]](_0x29a3[84])[_0x29a3[49]]()[_0x29a3[83]]();_0x3a21x1(this)[_0x29a3[22]](_0x29a3[84])[_0x29a3[85]](_0x29a3[40]);if(/=author\("/[_0x29a3[86]](_0x3a21x36)){var _0x3a21x37=/=author\("/[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]];var _0x3a21x38=/"\)/[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]];_0x3a21x1a= _0x3a21x36[_0x29a3[89]](_0x3a21x37+ 9,_0x3a21x38);_0x3a21x36= _0x3a21x36[_0x29a3[92]](_0x29a3[90]+ _0x3a21x1a+ _0x29a3[91],_0x29a3[40])};if(/=title\("/[_0x29a3[86]](_0x3a21x36)){var _0x3a21x39=/=title\("/[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]]+ 1;var _0x3a21x3a=/"\)/[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]];_0x3a21x1b= _0x3a21x36[_0x29a3[89]](_0x3a21x39+ 7,_0x3a21x3a);_0x3a21x36= _0x3a21x36[_0x29a3[92]](_0x29a3[93]+ _0x3a21x1b+ _0x29a3[91],_0x29a3[40])};if(/=synopsis\("/[_0x29a3[86]](_0x3a21x36)){var _0x3a21x3b=/=synopsis\("/[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]];var _0x3a21x3c=/"\)/[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]];_0x3a21x1c= _0x3a21x36[_0x29a3[89]](_0x3a21x3b+ 11,_0x3a21x3c);_0x3a21x36= _0x3a21x36[_0x29a3[92]](_0x29a3[94]+ _0x3a21x1c+ _0x29a3[91],_0x29a3[40])};if(_0x3a21x3[_0x29a3[95]]){if(_0x3a21x22){if(_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[96])[_0x29a3[26]]% 2== 0){_0x3a21x1(_0x3a21x19)[_0x29a3[71]](_0x29a3[97])}};_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[96])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x3e)=>{if(!_0x3a21x22){var _0x3a21x3f=_0x3a21x1(_0x3a21x3e)[_0x29a3[99]](_0x29a3[98]);var _0x3a21x40=_0x3a21x1(_0x3a21x3e)[_0x29a3[48]](_0x29a3[100])|| _0x29a3[40];_0x3a21x1(_0x3a21x3e)[_0x29a3[101]]();var _0x3a21x41=_0x3a21x1[_0x29a3[105]](_0x29a3[102]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[104]);var _0x3a21x42=_0x3a21x1[_0x29a3[105]](_0x29a3[106]+ _0x3a21x40+ _0x29a3[104]);_0x3a21x1(_0x3a21x42)[_0x29a3[33]]({"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65":_0x29a3[107]+ _0x3a21x3f+ _0x29a3[108],"\x63\x6F\x6C\x6F\x72":_0x29a3[109]});_0x3a21x1(_0x3a21x41)[_0x29a3[71]](_0x3a21x42);_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[111])[_0x29a3[110]](_0x3a21x41)};if(_0x3a21x22){var _0x3a21x3f=_0x3a21x1(_0x3a21x3e)[_0x29a3[99]](_0x29a3[98]);var _0x3a21x40=_0x3a21x1(_0x3a21x3e)[_0x29a3[48]](_0x29a3[100])|| _0x29a3[40];var _0x3a21x43=_0x3a21x1(_0x3a21x3e)[_0x29a3[48]](_0x29a3[112]);_0x3a21x1(_0x3a21x3e)[_0x29a3[101]]();var _0x3a21x41=undefined;var _0x3a21x42=undefined;if((_0x3a21x3d+ 1)% 2){if(_0x3a21x43){_0x3a21x43= _0x29a3[112]}else {_0x3a21x43= _0x29a3[40]};_0x3a21x41= _0x3a21x1[_0x29a3[105]](_0x29a3[102]+ _0x3a21x43+ _0x29a3[104]);_0x3a21x42= _0x3a21x1[_0x29a3[105]](_0x29a3[113]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[114]+ _0x3a21x40+ _0x29a3[104])}else {_0x3a21x41= _0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[115]);_0x3a21x42= _0x3a21x1[_0x29a3[105]](_0x29a3[113]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[116]+ _0x3a21x40+ _0x29a3[104])};_0x3a21x1(_0x3a21x42)[_0x29a3[33]]({"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65":_0x29a3[107]+ _0x3a21x3f+ _0x29a3[108],"\x63\x6F\x6C\x6F\x72":_0x29a3[109]});_0x3a21x1(_0x3a21x41)[_0x29a3[71]](_0x3a21x42);_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[111])[_0x29a3[110]](_0x3a21x41)}})}else {if(!_0x3a21x3[_0x29a3[95]]){var _0x3a21x44=[];var _0x3a21x45=/\(\(/;var _0x3a21x46=/\)\)/;while(_0x3a21x45[_0x29a3[86]](_0x3a21x36)){var _0x3a21x47=_0x29a3[40];var _0x3a21x48=_0x3a21x45[_0x29a3[88]](_0x3a21x36);var _0x3a21x49=_0x3a21x48[_0x29a3[87]];var _0x3a21x4a=_0x3a21x46[_0x29a3[88]](_0x3a21x36);var _0x3a21x4b=_0x3a21x4a[_0x29a3[87]]+ 2;_0x3a21x47+= _0x3a21x36[_0x29a3[118]](_0x3a21x49,_0x3a21x4b);_0x3a21x36= _0x3a21x36[_0x29a3[118]](_0x3a21x4b);var _0x3a21x4c=0;var _0x3a21x4d=undefined;if(_0x3a21x45[_0x29a3[86]](_0x3a21x36)){_0x3a21x4d= _0x3a21x45[_0x29a3[88]](_0x3a21x36)[_0x29a3[87]]};if(_0x3a21x4d!= undefined){_0x3a21x47+= _0x3a21x36[_0x29a3[118]](_0x3a21x4c,_0x3a21x4d)}else {_0x3a21x47+= _0x3a21x36[_0x29a3[118]](_0x3a21x4c)};_0x3a21x36= _0x3a21x36[_0x29a3[118]](_0x3a21x4c);_0x3a21x47= _0x3a21x47[_0x29a3[92]](_0x3a21x45,_0x29a3[119]);_0x3a21x47= _0x3a21x47[_0x29a3[92]](_0x3a21x46,_0x29a3[120]);_0x3a21x47= _0x3a21x47[_0x29a3[92]](/\n/g,_0x29a3[121]);_0x3a21x47= _0x3a21x47[_0x29a3[83]]();_0x3a21x44[_0x29a3[122]](_0x3a21x47)};for(var _0x3a21x4e of _0x3a21x44){if(/>=/[_0x29a3[86]](_0x3a21x4e)){var _0x3a21x4f=/=\w+/[_0x29a3[88]](_0x3a21x4e);_0x3a21x4f= _0x3a21x4f[0][_0x29a3[83]]();var _0x3a21x26=/<h3>(.*?)<\/h3>/[_0x29a3[88]](_0x3a21x4e);var _0x3a21x50=_0x29a3[40];if(/=cover\("/[_0x29a3[86]](_0x3a21x4e)){var _0x3a21x51=/=cover\("/[_0x29a3[88]](_0x3a21x4e)[_0x29a3[87]]+ 1;var _0x3a21x52=/"\)/[_0x29a3[88]](_0x3a21x4e)[_0x29a3[87]];_0x3a21x50= _0x3a21x4e[_0x29a3[89]](_0x3a21x51+ 7,_0x3a21x52)};var _0x3a21x3e=_0x3a21x26[1];_0x3a21x4e= _0x3a21x4e[_0x29a3[92]](_0x3a21x4e[_0x29a3[89]](_0x3a21x26[_0x29a3[87]],_0x3a21x26[0][_0x29a3[26]]+ _0x3a21x4f[_0x29a3[26]]),_0x29a3[40]);_0x3a21x4e= _0x3a21x4e[_0x29a3[92]](/\("(.*?)"\)/,_0x29a3[40]);_0x3a21x4e= _0x3a21x4e[_0x29a3[83]]();switch(_0x3a21x4f){case _0x29a3[127]:var _0x3a21x53=_0x3a21x1[_0x29a3[105]](_0x29a3[102]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[104]);var _0x3a21x54=_0x3a21x1[_0x29a3[105]](_0x29a3[123]);var _0x3a21x55=_0x3a21x1[_0x29a3[105]](_0x29a3[124]+ _0x3a21x26[1]+ _0x29a3[125]+ _0x3a21x50+ _0x29a3[126]);_0x3a21x1(_0x3a21x54)[_0x29a3[71]](_0x3a21x55);_0x3a21x1(_0x3a21x53)[_0x29a3[71]](_0x3a21x54);_0x3a21x1(this)[_0x29a3[22]](_0x29a3[111])[_0x29a3[110]](_0x3a21x53);break;case _0x29a3[132]:if(_0x3a21x3e!= _0x29a3[40]){var _0x3a21x41=_0x3a21x1[_0x29a3[105]](_0x29a3[102]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[104]);var _0x3a21x42=_0x3a21x1[_0x29a3[105]](_0x29a3[128]);_0x3a21x1(_0x3a21x42)[_0x29a3[33]]({"\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x69\x6D\x61\x67\x65":_0x29a3[107]+ _0x3a21x3e+ _0x29a3[108],"\x63\x6F\x6C\x6F\x72":_0x29a3[109]});_0x3a21x1(_0x3a21x41)[_0x29a3[71]](_0x3a21x42);_0x3a21x1(this)[_0x29a3[22]](_0x29a3[111])[_0x29a3[110]](_0x3a21x41)}else {console[_0x29a3[130]](_0x29a3[129]);throw _0x29a3[131]};break}};var _0x3a21x28=_0x3a21x1[_0x29a3[105]](_0x29a3[133]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[134]);var _0x3a21x56=_0x3a21x1[_0x29a3[105]](_0x29a3[135]);_0x3a21x1(_0x3a21x56)[_0x29a3[71]](_0x3a21x4e);_0x3a21x1(_0x3a21x28)[_0x29a3[71]](_0x3a21x56);_0x3a21x1(this)[_0x29a3[22]](_0x29a3[111])[_0x29a3[110]](_0x3a21x28)};_0x3a21x1(this)[_0x29a3[22]](_0x29a3[111])[_0x29a3[22]](_0x29a3[21])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x57)=>{_0x3a21x1(_0x3a21x57)[_0x29a3[20]](_0x29a3[136])});while(_0x3a21x1(_0x29a3[156])[_0x29a3[26]]> 0){_0x3a21x1(this)[_0x29a3[22]](_0x29a3[111])[_0x29a3[22]](_0x29a3[155])[_0x29a3[22]](_0x29a3[154])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x57)=>{_0x3a21x1(_0x3a21x57)[_0x29a3[137]]()[_0x29a3[23]](_0x29a3[136]);var _0x3a21x58=_0x3a21x1(_0x3a21x57)[0][_0x29a3[138]]< _0x3a21x1(_0x3a21x57)[0][_0x29a3[139]];if(_0x3a21x58){var _0x3a21x59=_0x3a21x1(_0x3a21x57)[0][_0x29a3[140]];var _0x3a21x5a=_0x29a3[40];_0x3a21x59= _0x3a21x59[_0x29a3[92]](_0x29a3[121],_0x29a3[141]);_0x3a21x59= _0x3a21x59[_0x29a3[92]](_0x29a3[119],_0x29a3[142]);_0x3a21x59= _0x3a21x59[_0x29a3[92]](_0x29a3[120],_0x29a3[143]);while(_0x3a21x58){var _0x3a21x5b=_0x3a21x59[_0x29a3[145]](_0x29a3[144]);_0x3a21x5a= _0x3a21x59[_0x29a3[89]](_0x3a21x5b)+ _0x3a21x5a;_0x3a21x59= _0x3a21x59[_0x29a3[89]](0,_0x3a21x5b);_0x3a21x59= _0x3a21x59[_0x29a3[92]](_0x29a3[141],_0x29a3[121]);_0x3a21x59= _0x3a21x59[_0x29a3[92]](_0x29a3[142],_0x29a3[119]);_0x3a21x59= _0x3a21x59[_0x29a3[92]](_0x29a3[143],_0x29a3[120]);_0x3a21x59= _0x3a21x59[_0x29a3[83]]();_0x3a21x1(_0x3a21x57)[0][_0x29a3[140]]= _0x3a21x59;_0x3a21x1(_0x3a21x57)[_0x29a3[22]](_0x29a3[146])[_0x29a3[117]](function(_0x3a21x3d,_0x3a21x57){if(_0x3a21x1(_0x3a21x57)[_0x29a3[85]]()[_0x29a3[92]](/\s|&nbsp;/g,_0x29a3[40])[_0x29a3[26]]== 0){_0x3a21x1(_0x3a21x57)[_0x29a3[101]]()}});_0x3a21x58= _0x3a21x1(_0x3a21x57)[0][_0x29a3[138]]< _0x3a21x1(_0x3a21x57)[0][_0x29a3[139]]};if(_0x3a21x5a!= _0x29a3[40]){_0x3a21x5a= _0x3a21x5a[_0x29a3[92]](_0x29a3[141],_0x29a3[121]);_0x3a21x5a= _0x3a21x5a[_0x29a3[92]](_0x29a3[142],_0x29a3[119]);_0x3a21x5a= _0x3a21x5a[_0x29a3[92]](_0x29a3[143],_0x29a3[120]);_0x3a21x5a= _0x3a21x5a[_0x29a3[83]]();if(_0x3a21x5a[_0x29a3[147]](0)!= _0x29a3[148]){_0x3a21x5a= _0x29a3[149]+ _0x3a21x5a};_0x3a21x1(_0x3a21x57)[_0x29a3[137]]()[_0x29a3[153]](_0x29a3[150]+ _0x3a21x3[_0x29a3[103]]+ _0x29a3[151]+ _0x3a21x5a+ _0x29a3[152])}}else {}})};_0x3a21x1(this)[_0x29a3[22]](_0x29a3[159])[_0x29a3[33]](_0x29a3[157],_0x29a3[158]);_0x3a21x1(this)[_0x29a3[22]](_0x29a3[21])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x57)=>{var _0x3a21x56=_0x3a21x1(_0x3a21x57)[_0x29a3[22]](_0x29a3[154])[_0x29a3[49]]();_0x3a21x56= _0x3a21x56[_0x29a3[92]](_0x29a3[121],_0x29a3[40]);_0x3a21x56= _0x3a21x56[_0x29a3[92]](_0x29a3[160],_0x29a3[40]);_0x3a21x56= _0x3a21x56[_0x29a3[83]]();if(_0x3a21x56[_0x29a3[26]]== 0){_0x3a21x1(_0x3a21x57)[_0x29a3[101]]()}})}};var _0x3a21x5c=_0x3a21x1(this)[_0x29a3[22]](_0x29a3[154])[_0x29a3[26]];_0x3a21x1d= _0x3a21x5c;_0x3a21x1(this)[_0x29a3[22]](_0x29a3[154])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x57)=>{var _0x3a21x40=_0x3a21x5c- _0x3a21x3d;_0x3a21x1(_0x3a21x57)[_0x29a3[137]]()[_0x29a3[99]](_0x29a3[161],_0x3a21x40);if(!_0x3a21x3[_0x29a3[95]]){if(!_0x3a21x1[_0x29a3[83]](_0x3a21x1(_0x3a21x57)[_0x29a3[85]]())){_0x3a21x1(_0x3a21x57)[_0x29a3[137]](_0x29a3[21])[_0x29a3[101]]();return}};var _0x3a21x55=_0x3a21x1[_0x29a3[105]](_0x29a3[162]+ (_0x3a21x40)+ _0x29a3[163]);_0x3a21x1(_0x3a21x57)[_0x29a3[71]](_0x3a21x55)});if(_0x3a21x22){_0x3a21x1(this)[_0x29a3[22]](_0x29a3[21])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x28)=>{if(_0x3a21x1(_0x3a21x28)[_0x29a3[22]](_0x29a3[164])[_0x29a3[26]]<= 0){return};var _0x3a21x5d=_0x3a21x1(_0x3a21x28)[_0x29a3[22]](_0x29a3[167])[_0x29a3[22]](_0x29a3[166])[_0x29a3[165]]();var _0x3a21x5e=_0x3a21x1(_0x3a21x28)[_0x29a3[22]](_0x29a3[164])[_0x29a3[22]](_0x29a3[166])[_0x29a3[165]]();_0x3a21x1(_0x3a21x28)[_0x29a3[22]](_0x29a3[166])[_0x29a3[101]]();_0x3a21x1(_0x3a21x28)[_0x29a3[22]](_0x29a3[167])[_0x29a3[71]](_0x3a21x5e);_0x3a21x1(_0x3a21x28)[_0x29a3[22]](_0x29a3[164])[_0x29a3[71]](_0x3a21x5d)})};_0x3a21x1(this)[_0x29a3[22]](_0x29a3[21])[_0x29a3[168]]()[_0x29a3[20]](_0x29a3[31]);_0x3a21x4(_0x3a21x1(this)[_0x29a3[22]](_0x29a3[111])[0],(_0x3a21x5f)=>{switch(_0x3a21x5f){case _0x29a3[15]:_0x3a21x16(_0x3a21x1(this));break;case _0x29a3[16]:_0x3a21x18(_0x3a21x1(this));break;case _0x29a3[17]:_0x3a21x60(_0x29a3[169]);break;case _0x29a3[6]:_0x3a21x60(_0x29a3[79]);break}});if(!_0x3a21x22){_0x3a21x4(_0x3a21x1(this)[_0x29a3[22]](_0x29a3[82])[0],(_0x3a21x5f)=>{switch(_0x3a21x5f){case _0x29a3[15]:;case _0x29a3[6]:_0x3a21x16(_0x3a21x1(this));_0x3a21x60(_0x29a3[79]);break;case _0x29a3[17]:_0x3a21x60(_0x29a3[169]);break}});_0x3a21x4(_0x3a21x1(this)[_0x29a3[22]](_0x29a3[81])[0],(_0x3a21x5f)=>{switch(_0x3a21x5f){case _0x29a3[16]:;case _0x29a3[6]:_0x3a21x18(_0x3a21x1(this));_0x3a21x60(_0x29a3[79]);break;case _0x29a3[17]:_0x3a21x60(_0x29a3[169]);break}})};_0x3a21x1(document)[_0x29a3[171]]((_0x3a21x13)=>{switch(_0x3a21x13[_0x29a3[170]]){case 38:_0x3a21x60(_0x29a3[169]);_0x3a21x13[_0x29a3[10]]();break;case 40:_0x3a21x60(_0x29a3[79]);_0x3a21x13[_0x29a3[10]]();break}});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[178])[_0x29a3[117]]((_0x3a21x3d,_0x3a21x60)=>{var _0x3a21x55=_0x3a21x1[_0x29a3[105]](_0x29a3[172]+ _0x3a21x1b+ _0x29a3[173]+ _0x3a21x1a+ _0x29a3[174]);_0x3a21x1(_0x3a21x60)[_0x29a3[71]](_0x3a21x55);if(_0x3a21x1c!= _0x29a3[40]){_0x3a21x1(_0x3a21x60)[_0x29a3[22]](_0x29a3[177])[_0x29a3[71]](_0x29a3[175]+ _0x3a21x1c+ _0x29a3[176])}});_0x3a21x4(_0x3a21x1(this)[_0x29a3[22]](_0x29a3[179])[0],(_0x3a21x5f)=>{switch(_0x3a21x5f){case _0x29a3[18]:;case _0x29a3[6]:_0x3a21x60(_0x29a3[79]);break;case _0x29a3[17]:_0x3a21x60(_0x29a3[180]);break}});_0x3a21x4(_0x3a21x1(this)[_0x29a3[22]](_0x29a3[181])[0],(_0x3a21x5f)=>{switch(_0x3a21x5f){case _0x29a3[18]:_0x3a21x60(_0x29a3[79]);break;case _0x29a3[17]:;case _0x29a3[6]:_0x3a21x60(_0x29a3[180]);break}});_0x3a21x1(document)[_0x29a3[191]](()=>{_0x3a21x1(_0x29a3[190])[_0x29a3[80]](_0x29a3[78],(_0x3a21x13)=>{_0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[22]](_0x29a3[182])[_0x29a3[101]]();var _0x3a21x61=_0x3a21x13[_0x29a3[7]];var _0x3a21x62=_0x3a21x13[_0x29a3[8]];_0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[33]](_0x29a3[184],_0x29a3[77]);var _0x3a21x63=Math[_0x29a3[54]](_0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[185]]()* 0.95);var _0x3a21x64=Math[_0x29a3[54]](_0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[186]]()* 1.5);var _0x3a21x65=_0x3a21x63> _0x3a21x64?_0x3a21x63:_0x3a21x64;var _0x3a21x66=_0x3a21x1[_0x29a3[105]](_0x29a3[187]);_0x3a21x1(_0x3a21x66)[_0x29a3[33]]({width:_0x3a21x65,height:_0x3a21x65,left:_0x3a21x61- _0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[188]]()[_0x29a3[15]]- Math[_0x29a3[54]](_0x3a21x65/ 2),top:_0x3a21x62- _0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[188]]()[_0x29a3[189]]- Math[_0x29a3[54]](_0x3a21x65/ 2)});_0x3a21x1(_0x3a21x13[_0x29a3[183]])[_0x29a3[71]](_0x3a21x66);setTimeout(()=>{_0x3a21x1(_0x3a21x66)[_0x29a3[101]]()},1000)})});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[179])[_0x29a3[80]](_0x29a3[78],()=>{_0x3a21x60(_0x29a3[79])});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[192])[_0x29a3[80]](_0x29a3[78],()=>{setTimeout(()=>{_0x3a21x60(_0x29a3[79])},500)});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[50])[_0x29a3[80]](_0x29a3[78],(_0x3a21x57)=>{setTimeout(()=>{var _0x3a21x67=/\d+/[_0x29a3[88]](prompt(_0x29a3[193]));_0x3a21x68(_0x3a21x67)},500)});function _0x3a21x68(_0x3a21x69,_0x3a21x6){var _0x3a21x24=_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[194])[_0x29a3[49]]();if(_0x3a21x69> _0x3a21x1d){alert(_0x29a3[195])}else {if(_0x3a21x69!= null){if(_0x3a21x69< _0x3a21x24){while(_0x3a21x24> _0x3a21x69){_0x3a21x18(_0x3a21x1(_0x3a21x19),_0x3a21x69);_0x3a21x24= _0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[194])[_0x29a3[49]]()}}else {if(_0x3a21x69> _0x3a21x24){while(_0x3a21x24< _0x3a21x69){_0x3a21x16(_0x3a21x1(_0x3a21x19),_0x3a21x24);_0x3a21x24= _0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[194])[_0x29a3[49]]()}}}}};_0x3a21x6()}function _0x3a21x60(_0x3a21x6a){var _0x3a21x6b=_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[178]);switch(_0x3a21x6a){case _0x29a3[169]:_0x3a21x1(_0x3a21x6b)[_0x29a3[33]](_0x29a3[196],_0x29a3[197]);break;case _0x29a3[79]:_0x3a21x1(_0x3a21x6b)[_0x29a3[33]](_0x29a3[196],_0x29a3[198]);if(!_0x3a21x22){_0x3a21x1(_0x29a3[50])[_0x29a3[33]](_0x29a3[199],_0x29a3[200])};break;case _0x29a3[180]:_0x3a21x1(_0x3a21x6b)[_0x29a3[33]](_0x29a3[196],_0x29a3[201]);break}}_0x3a21x1(this)[_0x29a3[22]](_0x29a3[202])[_0x29a3[80]](_0x29a3[78],()=>{_0x3a21x60(_0x29a3[180])});_0x3a21x1(this)[_0x29a3[80]](_0x29a3[203],()=>{_0x3a21x60(_0x29a3[169])});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[204])[_0x29a3[80]](_0x29a3[78],()=>{_0x3a21x60(_0x29a3[180])});_0x3a21x1(this)[_0x29a3[22]](_0x29a3[205])[_0x29a3[101]]();if(_0x3a21x3[_0x29a3[56]]&&  !_0x3a21x22){if(_0x3a21x2f()){var _0x3a21x6c=_0x3a21x34(_0x3a21x1b+ _0x29a3[57]+ _0x3a21x1a);if(_0x3a21x6c>  -1){var _0x3a21x2c=_0x3a21x31(_0x29a3[58]);_0x3a21x68(_0x3a21x2c[_0x3a21x6c][_0x29a3[47]],function(){_0x3a21x60(_0x29a3[79])})}}};if(_0x3a21x22){_0x3a21x1(_0x3a21x19)[_0x29a3[33]]({width:_0x29a3[206],height:_0x29a3[207],margin:_0x29a3[37],overflow:_0x29a3[208]});_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[111])[_0x29a3[33]]({width:_0x29a3[209],right:0});_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[21])[_0x29a3[33]]({cursor:_0x29a3[210],"\x62\x6F\x78\x2D\x73\x68\x61\x64\x6F\x77":_0x29a3[211]});_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[154])[_0x29a3[33]]({"\x62\x6F\x78\x2D\x73\x68\x61\x64\x6F\x77":_0x29a3[211]});_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[166])[_0x29a3[33]]({bottom:_0x29a3[212]});_0x3a21x1(_0x3a21x19)[_0x29a3[22]](_0x29a3[213])[_0x29a3[33]]({width:_0x29a3[209]})};if(_0x3a21x1[_0x29a3[215]](_0x3a21x3[_0x29a3[214]])){_0x3a21x3[_0x29a3[214]][_0x29a3[216]](this)}})}}(jQuery))