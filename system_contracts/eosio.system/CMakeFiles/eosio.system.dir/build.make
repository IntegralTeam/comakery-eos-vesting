# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.10

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /root/eosio.contracts-1.9.1/contracts

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /root/eosio.contracts-1.9.1/build/contracts

# Include any dependencies generated for this target.
include eosio.system/CMakeFiles/eosio.system.dir/depend.make

# Include the progress variables for this target.
include eosio.system/CMakeFiles/eosio.system.dir/progress.make

# Include the compile flags for this target's objects.
include eosio.system/CMakeFiles/eosio.system.dir/flags.make

eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/eosio.system.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/eosio.system.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/eosio.system.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/eosio.system.cpp > CMakeFiles/eosio.system.dir/src/eosio.system.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/eosio.system.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/eosio.system.cpp -o CMakeFiles/eosio.system.dir/src/eosio.system.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj


eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/delegate_bandwidth.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/delegate_bandwidth.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/delegate_bandwidth.cpp > CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/delegate_bandwidth.cpp -o CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj


eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/exchange_state.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/exchange_state.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/exchange_state.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/exchange_state.cpp > CMakeFiles/eosio.system.dir/src/exchange_state.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/exchange_state.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/exchange_state.cpp -o CMakeFiles/eosio.system.dir/src/exchange_state.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj


eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/native.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/native.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/native.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/native.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/native.cpp > CMakeFiles/eosio.system.dir/src/native.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/native.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/native.cpp -o CMakeFiles/eosio.system.dir/src/native.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj


eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/producer_pay.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/producer_pay.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/producer_pay.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/producer_pay.cpp > CMakeFiles/eosio.system.dir/src/producer_pay.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/producer_pay.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/producer_pay.cpp -o CMakeFiles/eosio.system.dir/src/producer_pay.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj


eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/rex.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/rex.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/rex.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/rex.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/rex.cpp > CMakeFiles/eosio.system.dir/src/rex.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/rex.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/rex.cpp -o CMakeFiles/eosio.system.dir/src/rex.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj


eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj: eosio.system/CMakeFiles/eosio.system.dir/flags.make
eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj: /root/eosio.contracts-1.9.1/contracts/eosio.system/src/voting.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/eosio.system.dir/src/voting.cpp.obj -c /root/eosio.contracts-1.9.1/contracts/eosio.system/src/voting.cpp

eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/eosio.system.dir/src/voting.cpp.i"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/eosio.contracts-1.9.1/contracts/eosio.system/src/voting.cpp > CMakeFiles/eosio.system.dir/src/voting.cpp.i

eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/eosio.system.dir/src/voting.cpp.s"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && /usr/bin/eosio-cpp $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/eosio.contracts-1.9.1/contracts/eosio.system/src/voting.cpp -o CMakeFiles/eosio.system.dir/src/voting.cpp.s

eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.requires:

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.requires

eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.provides: eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.requires
	$(MAKE) -f eosio.system/CMakeFiles/eosio.system.dir/build.make eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.provides.build
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.provides

eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.provides.build: eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj


# Object files for target eosio.system
eosio_system_OBJECTS = \
"CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj" \
"CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj" \
"CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj" \
"CMakeFiles/eosio.system.dir/src/native.cpp.obj" \
"CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj" \
"CMakeFiles/eosio.system.dir/src/rex.cpp.obj" \
"CMakeFiles/eosio.system.dir/src/voting.cpp.obj"

# External object files for target eosio.system
eosio_system_EXTERNAL_OBJECTS =

eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/build.make
eosio.system/eosio.system.wasm: eosio.system/CMakeFiles/eosio.system.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/root/eosio.contracts-1.9.1/build/contracts/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Linking CXX executable eosio.system.wasm"
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/eosio.system.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
eosio.system/CMakeFiles/eosio.system.dir/build: eosio.system/eosio.system.wasm

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/build

eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/eosio.system.cpp.obj.requires
eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/delegate_bandwidth.cpp.obj.requires
eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/exchange_state.cpp.obj.requires
eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/native.cpp.obj.requires
eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/producer_pay.cpp.obj.requires
eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/rex.cpp.obj.requires
eosio.system/CMakeFiles/eosio.system.dir/requires: eosio.system/CMakeFiles/eosio.system.dir/src/voting.cpp.obj.requires

.PHONY : eosio.system/CMakeFiles/eosio.system.dir/requires

eosio.system/CMakeFiles/eosio.system.dir/clean:
	cd /root/eosio.contracts-1.9.1/build/contracts/eosio.system && $(CMAKE_COMMAND) -P CMakeFiles/eosio.system.dir/cmake_clean.cmake
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/clean

eosio.system/CMakeFiles/eosio.system.dir/depend:
	cd /root/eosio.contracts-1.9.1/build/contracts && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /root/eosio.contracts-1.9.1/contracts /root/eosio.contracts-1.9.1/contracts/eosio.system /root/eosio.contracts-1.9.1/build/contracts /root/eosio.contracts-1.9.1/build/contracts/eosio.system /root/eosio.contracts-1.9.1/build/contracts/eosio.system/CMakeFiles/eosio.system.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : eosio.system/CMakeFiles/eosio.system.dir/depend

